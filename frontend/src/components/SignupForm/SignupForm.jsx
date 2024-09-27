import React, { useState } from 'react';
import './SignupForm.css';
import github_logo from '../../Assets/github.png';
import facebook_logo from '../../Assets/facebook.png';
import google_logo from '../../Assets/google.png';
import in_logo from '../../Assets/in.png';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Allows cookies to be sent with the request
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        // Handle successful signup (e.g., redirect to dashboard)
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData);
        // Handle errors (e.g., display error message)
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSocialSignup = (provider) => {
    // Redirect to the backend's social login route
    window.location.href = `http://localhost:5000/auth/${provider}`;
  };

  return (
    <div className="signup-form-container">
      <button className="main-login-button">Log in to Business Idea Generation Platform</button>

      <div className="social-signup-buttons">
        <button className="social-button github" onClick={() => handleSocialSignup('github')}>
          <img src={github_logo} className='login-social-logo' alt="github-icon" /> Sign Up with Github
        </button>
        <button className="social-button facebook" onClick={() => handleSocialSignup('facebook')}>
          <img src={facebook_logo} className='login-social-logo' alt="facebook-icon" /> Sign Up with Facebook
        </button>
      </div>

      <Link to={'/login'} className="login-link">Already have an account? Log in here</Link>

      <div className='signup-section'>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>First & Surname</label>
          <input
            type="text"
            name="name"
            placeholder="First & Surname"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <button type="submit" className="submit-button">Sign Up</button>
        </form>

        <div className="alternative-signup">
          <button className="social-button google" onClick={() => handleSocialSignup('google')}>
            <img src={google_logo} className='login-social-logo' alt="" /> Sign Up with Google
          </button>
          <button className="social-button linkedin" onClick={() => handleSocialSignup('linkedin')}>
            <img src={in_logo} className='login-social-logo' alt="" /> Sign Up with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
