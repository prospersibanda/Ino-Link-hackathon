const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = (passport) => {
  // Local Strategy for username and password login
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'No user found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

  // Google OAuth Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ socialId: profile.id, provider: 'google' });
          if (!user) {
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              socialId: profile.id,
              provider: 'google',
            });
            await user.save();
          }
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  // Facebook OAuth Strategy
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'emails'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ socialId: profile.id, provider: 'facebook' });
          if (!user) {
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              socialId: profile.id,
              provider: 'facebook',
            });
            await user.save();
          }
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  // GitHub OAuth Strategy
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: '/auth/github/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ socialId: profile.id, provider: 'github' });
          if (!user) {
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value || `${profile.username}@github.com`, // GitHub might not provide an email
              socialId: profile.id,
              provider: 'github',
            });
            await user.save();
          }
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  // LinkedIn OAuth Strategy
  passport.use(
    new LinkedInStrategy(
      {
        clientID: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
        callbackURL: '/auth/linkedin/callback',
        scope: ['r_emailaddress', 'r_liteprofile'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await User.findOne({ socialId: profile.id, provider: 'linkedin' });
          if (!user) {
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              socialId: profile.id,
              provider: 'linkedin',
            });
            await user.save();
          }
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  // Serialize user information into the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user information from the session
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
