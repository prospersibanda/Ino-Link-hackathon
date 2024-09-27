import React from 'react'
import '../styles/youth.css';
import banner from '../Assets/banner.jpg';
import { FaLock, FaGem, FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const YouthDashboard = () => {
  const navigate = useNavigate();

  const handleAddSkills = () => {
      navigate('/add-skills');
  };

  return (
      <div className="mentor-profile-container">
          {/* Profile Header */}
          <div className="profile-header">
              <img src={banner} alt="background" className="background-img" />
              <div className="profile-info">
                  <div className="avatar"></div>
                  <div className='p-followers'>
                      <div className="user-details">
                          <h2>Prosper Sibanda</h2>
                          <h3>IT Specialist</h3>
                          <p>Lorem ipsum dolor sit amet, <span className="highlight">kevin malou</span> adipiscing elit. Sed dapibus eros eu vehicula interdum.</p>
                          <div className="action-buttons">
                              <button className="contact-btn">To set up a contact</button>
                              <button className="message-btn"><FaLock /> Send a message</button>
                              <button className="more-btn">More</button>
                          </div>
                      </div>
                      <p className="followers far-right">25k Followers</p>
                  </div>
              </div>
          </div>

          {/* About and Skills Section */}
          <div className="about-skills-section">
              <h3>About</h3>
              <p>🌟 Turning ideas into code and code into impactful digital experiences. As a Software Engineer and Affiliate Marketer, I’m passionate about building seamless, responsive web applications and crafting data-driven marketing strategies that deliver real results.</p>
              <p>...<span className="see-more">see more</span></p>

              <div className="skills-container">
                  <div className="skills-header">
                      <FaGem className="skills-icon" />
                      <h4>Top Skills</h4>
                  </div>
                  <p className="skills-list">JavaScript • React.js • Git • Python (Programming Language) • Cascading Style Sheets (CSS)</p>
                  <FaArrowRight className="arrow-icon" onClick={handleAddSkills} />
              </div>
          </div>

          {/* General Information Section */}
          <div className="general-info-section">
              <h3>General Information</h3>
              <div className="general-info-card">
                  <FaInfoCircle className="info-icon" />
                  <p>
                      🌍 Based in Johannesburg, South Africa. I specialize in building web applications that are not only functional but also aesthetically pleasing. Outside of coding, I'm an avid traveler and coffee enthusiast. Currently open to freelance and full-time opportunities.
                  </p>
              </div>
          </div>
      </div>
  );
};

export default YouthDashboard