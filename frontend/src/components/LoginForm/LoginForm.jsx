import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import github_logo from '../../Assets/github.png';
import facebook_logo from '../../Assets/facebook.png';
import google_logo from '../../Assets/google.png';
import in_logo from '../../Assets/in.png';
import { Link } from 'react-router-dom';



const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle success (e.g., navigate to dashboard)
        navigate('/');
      } else {
        // Handle error (e.g., display error message)
        console.error(data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log in</h2>
        <p>
          Don't have an account? <a href="/signup">Create an account</a>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="password-field">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
        <p className="continue-text">
          Or, continue with <a href="/google">Google</a> or <a href="/linkedin">LinkedIn</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
