// SignupForm.js
import React from 'react';
import './SignupForm.css';
import github_logo from '../../Assets/github.png'
import facebook_logo from '../../Assets/facebook.png';
import google_logo from '../../Assets/google.png';
import in_logo from '../../Assets/in.png';

const SignupForm = () => {
  return (
    <div className="signup-form-container">
      <button className="main-login-button">Log in to Business Idea Generation Platform</button>

      <div className="social-signup-buttons">
        <button className="social-button github"><img src={github_logo} className='login-social-logo' alt="github-icon" /> Sign Up with Github</button>
        <button className="social-button facebook"><img src={facebook_logo} className='login-social-logo' alt="facebook-icon" /> Sign Up with Facebook</button>
      </div>

      <a href="#login" className="login-link">Already have an account? Log in here</a>

     <div className='signup-section'>
        <form className="signup-form">
            <label>First & Surname</label>
            <input type="text" placeholder="First & Surname" />

            <label>Email address</label>
            <input type="email" placeholder="Email address" />

            <label>Password</label>
            <input type="password" placeholder="Password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />

            <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit" className="submit-button">Sign Up</button>
        </form>

        <div className="alternative-signup">
            <button className="social-button google"><img src={google_logo} className='login-social-logo' alt="" /> Sign Up with Google</button>
            <button className="social-button linkedin"><img src={in_logo} className='login-social-logo' alt="" /> Sign Up with LinkedIn</button>
        </div>
     </div>
    </div>
  );
};

export default SignupForm;
