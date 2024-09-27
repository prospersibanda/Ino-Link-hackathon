import React, { useState } from 'react';
import './LoginForm.css';
<<<<<<< HEAD
=======
import github_logo from '../../Assets/github.png';
import facebook_logo from '../../Assets/facebook.png';
import google_logo from '../../Assets/google.png';
import in_logo from '../../Assets/in.png';
import { Link } from 'react-router-dom';
>>>>>>> f3eea878d0e3e14ea6066f89028ea11c12d5a566


const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log in</h2>
        <p>
          Don't have an account? <a href="/signup">Create an account</a>
        </p>
        <form>
          <input type="email" placeholder="Email address" />
          <div className="password-field">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
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
          Or, continue with <a href="/google">Google</a> or <a href="/facebook">Facebook</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
