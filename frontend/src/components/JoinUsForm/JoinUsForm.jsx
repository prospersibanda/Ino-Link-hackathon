import React, { useContext } from 'react';
import './JoinUsForm.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Navbar from '../Navbar2/Navbar2';

const JoinUsForm = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleDOBChange = (e) => {
    setUserData({
      ...userData,
      dateOfBirth: { ...userData.dateOfBirth, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', userData); // Debugging

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        console.log('Successfully registered:', data);
        navigate('/login');
      } else {
        console.error('Error during registration:', data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="join-us-container">
      <div className="join-us-form">
        <h2>Join us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First name*"
            value={userData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="middleName"
            placeholder="Middle name"
            value={userData.middleName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last name*"
            value={userData.lastName}
            onChange={handleChange}
          />

          <label>What's your gender? (optional)</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="non-binary"
                onChange={handleChange}
              /> Non-binary
            </label>
          </div>

          <label>What's your date of birth?</label>
          <div className="dob-group">
            <select
              name="month"
              value={userData.dateOfBirth.month}
              onChange={handleDOBChange}
            >
              <option value="">Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select
              name="date"
              value={userData.dateOfBirth.date}
              onChange={handleDOBChange}
            >
              <option value="">Date</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="year"
              value={userData.dateOfBirth.year}
              onChange={handleDOBChange}
            >
              <option value="">Year</option>
              {[...Array(100)].map((_, i) => (
                <option key={1923 + i} value={1923 + i}>
                  {1923 + i}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="next-btn">
            Complete Registration
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default JoinUsForm;
