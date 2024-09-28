import React, { useState } from 'react';
import './MentorProfile.css';
import banner from '../../Assets/banner.jpg';
import { FaLock, FaGem, FaArrowRight, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar2/Navbar2';

const MentorProfile = () => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false); // State to manage the text expansion

    const handleAddSkills = () => {
        navigate('/add-skills');
    };

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
        <Navbar/>
        <div className="mentor-profile-container">
            {/* Profile Header */}
            <div className="profile-header">
                <img src={banner} alt="background" className="background-img" />
                <div className="profile-info">
                    <div className="avatar"></div>
                    <div className="user-details">
                        <h2>Username</h2>
                        <h3>IT Specialist</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum.</h4>
                        <div className="action-buttons">
                            <button className="contact-btn"><FaPhone /> To set up a contact</button>
                            <button className="message-btn"><FaLock /> Send a message</button>
                            <button className="more-btn">More</button>
                        </div>
                    </div>
                    <p className="followers">25k Followers</p>
                </div>
            </div>

            {/* About and Skills Section */}
            <div className="about-skills-section">
                <h3>About</h3>
                <p>
                    🌟 Turning ideas into code and code into impactful digital experiences. 
                    As a Software Engineer and Affiliate Marketer, I’m passionate about building seamless, 
                    responsive web applications and crafting data-driven marketing strategies that deliver real results.
                    {isExpanded && (
                        <span> My journey in software development has equipped me with the skills to solve complex problems and create user-friendly solutions. I enjoy learning new technologies and applying them in practical ways to improve user experiences.</span>
                    )}
                </p>
                <p>
                    <span className="see-more" onClick={toggleExpansion}>
                        {isExpanded ? 'see less' : 'see more'}
                    </span>
                </p>

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
        </>
    );
};

export default MentorProfile;
