import React from 'react';
import './JoinUsForm.css';

const JoinUsForm = () => {
  return (
    <div className="join-us-container">
      <div className="join-us-form">
        <h2>Join us</h2>
        <div className="form-section">
          <p className="section-title">
            <span className="section-icon">1</span> Basic info
          </p>
          <p className="form-note">*All fields required unless noted.</p>
          <form>
            <input type="text" placeholder="First name*" />

            <input type="text" placeholder="Middle name" />

            <input type="text" placeholder="Last name*" />

            <label>What's your gender? (optional)</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" value="female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="non-binary" /> Non-binary
              </label>
            </div>

            <label>What's your date of birth?</label>
            <div className="dob-group">
              <select>
                <option value="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                {/* Add more months */}
              </select>
              <select>
                <option value="">Date</option>
                <option value="1">1</option>
                <option value="2">2</option>
                {/* Add more dates */}
              </select>
              <select>
                <option value="">Year</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                {/* Add more years */}
              </select>
            </div>

            <button type="submit" className="next-btn">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUsForm;
