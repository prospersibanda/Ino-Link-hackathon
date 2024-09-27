import React from 'react';
import './MentorProfile.css';
import banner from '../../Assets/banner.jpg';
import { FaLock } from 'react-icons/fa';

const MentorProfile = () => {
    return (
        <div className="mentor-profile-container">
            {/* Profile Header */}
            <div className="profile-header">
                <img src={banner} alt="background" className="background-img" />
                <div className="profile-info">
                    <div className="avatar"></div>
                    <div className="user-details">
                        <h2>Prosper Sibanda</h2>
                        <h3>IT Specialist</h3>
                        <p>Lorem ipsum dolor sit amet, <span className="highlight">kevin malou</span> adipiscing elit. Sed dapibus eros eu vehicula interdum.</p>
                        <div className="action-buttons">
                            <button className="contact-btn">To set up a contact</button>
                            <button className="message-btn"><FaLock/> Send a message</button>
                            <button className="more-btn">More</button>
                        </div>
                        <p className="followers">25k Followers</p>
                    </div>
                </div>
            </div>

            {/* Work Experience */}
            <div className="work-experience">
                <h3>Work Experience</h3>
                <div className="experience-item">
                    <div className="circle orange"></div>
                    <div className="experience-details">
                        <h4>Freelance UX/UI Designer</h4>
                        <p>Lorem ipsum</p>
                        <p>Jan 2022 – Present • 1 yr 6 mos</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="circle blue"></div>
                    <div className="experience-details">
                        <h4>UX/UI Designer</h4>
                        <p>Lorem ipsum</p>
                        <p>Jan 2022 – Present • 3 mos</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum.</p>
                    </div>
                </div>
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
