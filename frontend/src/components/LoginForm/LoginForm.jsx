import React, { useState } from 'react';
import './LoginForm.css';
import github_logo from '../../Assets/github.png';
import facebook_logo from '../../Assets/facebook.png';
import google_logo from '../../Assets/google.png';
import in_logo from '../../Assets/in.png';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Allows cookies to be sent with the request
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Handle successful login (e.g., redirect to dashboard)
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        // Handle errors (e.g., display error message)
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSocialLogin = (provider) => {
    // Redirect to the backend's social login route
    window.location.href = `http://localhost:5000/auth/${provider}`;
  };

  return (
    <div className="signup-form-container">
      <button className="main-login-button">Log in to Business Idea Generation Platform</button>

      <div className="social-signup-buttons">
        <button className="social-button github" onClick={() => handleSocialLogin('github')}>
          <img src={github_logo} className='login-social-logo' alt="github-icon" /> Log in with Github
        </button>
        <button className="social-button facebook" onClick={() => handleSocialLogin('facebook')}>
          <img src={facebook_logo} className='login-social-logo' alt="facebook-icon" /> Log in with Facebook
        </button>
      </div>

      <Link to={'/signup'} className="login-link">Don't have an account? Sign up here</Link>

      <div className='signup-section'>
        <form className="signup-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="submit-button">Log In</button>
        </form>

        <div className="alternative-signup">
          <button className="social-button google" onClick={() => handleSocialLogin('google')}>
            <img src={google_logo} className='login-social-logo' alt="" /> Log in with Google
          </button>
          <button className="social-button linkedin" onClick={() => handleSocialLogin('linkedin')}>
            <img src={in_logo} className='login-social-logo' alt="" /> Log in with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
