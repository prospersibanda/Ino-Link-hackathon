import React, { useState } from 'react';
import './LoginForm.css';

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
