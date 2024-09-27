import React from 'react';
import './LoginForm.css';
import github_logo from '../../assets/github.png';
import facebook_logo from '../../assets/facebook.png';
import google_logo from '../../assets/google.png';
import in_logo from '../../assets/in.png';

const LoginForm = () => {
  return (
    <div className="signup-form-container">
      <button className="main-login-button">Log in to Business Idea Generation Platform</button>

      <div className="social-signup-buttons">
        <button className="social-button github"><img src={github_logo} className='login-social-logo' alt="github-icon" /> Log in with Github</button>
        <button className="social-button facebook"><img src={facebook_logo} className='login-social-logo' alt="facebook-icon" /> Log in with Facebook</button>
      </div>

      <a href="#signup" className="login-link">Don't have an account? Sign up here</a>

      <div className='signup-section'>
        <form className="signup-form">
          <label>Email address</label>
          <input type="email" placeholder="Email address" />

          <label>Password</label>
          <input type="password" placeholder="Password" />

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit" className="submit-button">Log In</button>
        </form>

        <div className="alternative-signup">
          <button className="social-button google"><img src={google_logo} className='login-social-logo' alt="" /> Log in with Google</button>
          <button className="social-button linkedin"><img src={in_logo} className='login-social-logo' alt="" /> Log in with LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
