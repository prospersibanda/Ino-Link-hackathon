import React from 'react';
import './SkillCard.css'; // Import the CSS file

const BusinessReportCard = ({ title, description, timestamp }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <h3>{title}</h3>
        <p className="skill-card-timestamp">{timestamp}</p>
      </div>
      <p className="skill-card-description">{description}</p>
    </div>
  );
};

export default BusinessReportCard;
