import React from 'react';
import './MentorProfile.css';
import banner from '../../Assets/banner.jpg';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const MentorProfile = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleAddSkills = () => {
        // Navigate to the Add Skills page
        navigate('/add-skills'); // Adjust this path as needed
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

            {/* Skills Section */}
            <div className="skills-section">
                <h3>Skills</h3>
                <ul className="skills-list">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>UI/UX Design</li>
                </ul>
                <button className="add-skills-btn" onClick={handleAddSkills}>Add Skills</button>
            </div>

            {/* General Information */}
            <div className="general-information">
                <h3>General Information</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ornare odio. Curabitur vitae velit ultricies, lobortis tellus quis, tempus ante.</p>
            </div>
        </div>
    );
};

export default MentorProfile;
