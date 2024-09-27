const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Local Signup
router.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10)
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Local Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
});


// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/dashboard');
});

// Facebook OAuth
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/dashboard');
});

// GitHub OAuth
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/dashboard');
});

// LinkedIn OAuth
router.get('/linkedin', passport.authenticate('linkedin'));
router.get('/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;
