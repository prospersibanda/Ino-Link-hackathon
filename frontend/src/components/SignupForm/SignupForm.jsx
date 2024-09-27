import React, { useState, useContext } from 'react';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const SignupForm = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the JoinUsForm for additional information
    navigate('/joinus');
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an account</h2>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
        <div className="radio-buttons">
          <input
            type="radio"
            name="role"
            value="mentor"
            onChange={handleChange}
          />
          <label>Becoming a Mentor</label>
          <input
            type="radio"
            name="role"
            value="youth"
            onChange={handleChange}
          />
          <label>Are you a youth</label>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={userData.email}
            onChange={handleChange}
          />
          <div className="password-field">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {isPasswordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <select
            name="countryOfResidence"
            value={userData.countryOfResidence}
            onChange={handleChange}
          >
            <option value="">Country of residence</option>
            <option value="south-africa">South Africa</option>
            <option value="nigeria">Nigeria</option>
            {/* Add more countries as needed */}
          </select>
          <button type="submit" className="create-account-btn">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
