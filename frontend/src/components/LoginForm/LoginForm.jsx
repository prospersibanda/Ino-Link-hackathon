import React, { useState, useContext } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/UserContext';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manual JWT decoding function
  const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1]; // Get the payload part
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Adjust base64 format
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      return JSON.parse(jsonPayload); // Return the parsed payload
    } catch (error) {
      console.error('Failed to decode JWT:', error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Manually decode the JWT to extract user information
        const decodedToken = decodeToken(data.token);

        if (!decodedToken) {
          console.error('Failed to decode token.');
          return;
        }

        // Assuming the decoded token structure is: { user: { _id, email, ... } }
        const user = decodedToken.user;

        // Set the user data in the context
        setUserData({
          _id: user._id, // Extract _id from the decoded token
          token: data.token, // Save the token
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        });

        // Log to confirm user data is set
        console.log('User data set in context:', {
          _id: user._id,
          token: data.token,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        });

        navigate('/generate');
      } else {
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
