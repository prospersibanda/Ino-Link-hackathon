import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an account</h2>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
        <div className="radio-buttons">
        <input type="radio" name="role" value="mentor" />
          <label>
             Becoming a Mentor
          </label>
          <input type="radio" name="role" value="youth" />
          <label>
             Are you a youth
          </label>
        </div>
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
          <select>
            <option value="">Country of residence</option>
            <option value="south-africa">South Africa</option>
            <option value="nigeria">Nigeria</option>
            {/* Add more country options as needed */}
          </select>
          <button type="submit" className="create-account-btn">
            Create an account
          </button>
        </form>
        <p className="continue-text">
          Or, continue with <a href="/google">Google</a> or <a href="/facebook">Facebook</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
