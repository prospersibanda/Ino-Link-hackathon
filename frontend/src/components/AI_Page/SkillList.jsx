import React, { useState } from 'react';
import BusinessReportCard from './BusinessReportCard';
import './SkillList.css';
import axios from 'axios';

const SkillList = () => {
  const [skills, setSkills] = useState(''); // State to store the user's input skills
  const [reports, setReports] = useState([]); // State to store reports returned by the model
  const [loading, setLoading] = useState(false); // State to handle loading state

  // Function to generate the report based on input skills
  const generateReport = async () => {
    if (!skills) {
      console.log('No skills entered, cannot generate report.');
      return;
    }

    const formattedSkills = skills.split(',').map(skill => skill.trim()).join(', ');

    setLoading(true);
    try {
      // Make a POST request to the backend to generate the full report
      const response = await axios.post('http://localhost:5001/api/generate-full-report', {
        skills: formattedSkills,
      });

      // Log the response to inspect its structure
      console.log('Response data:', response.data);

      // Parse JSON objects and extract text
      const idea = response.data.idea?.idea || response.data.idea || "No idea generated.";
      const plan = response.data.plan?.plan || response.data.plan || "No plan generated.";
      const mentors = response.data.mentors?.mentors || response.data.mentors || "No mentors generated.";

      // Update the state with the returned report
      setReports([
        {
          title: 'Business Idea',
          description: idea,
          timestamp: new Date().toLocaleString(),
        },
        {
          title: 'Business Plan',
          description: plan,
          timestamp: new Date().toLocaleString(),
        },
        {
          title: 'Mentors',
          description: mentors,
          timestamp: new Date().toLocaleString(),
        },
      ]);
    } catch (error) {
      console.error('Error generating report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="skill-list-container">
      {/* Input field for entering skills */}
      <div className="skill-input-container">
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Enter your skills (e.g., marketing, software development)"
          className="skill-input"
        />
        <button onClick={generateReport} className="generate-button" disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>

      {/* Display reports */}
      <div className="report-list">
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <BusinessReportCard
              key={index}
              title={report.title}
              description={report.description} // Ensure this is a string
              timestamp={report.timestamp}
            />
          ))
        ) : (
          <p>No reports available. Enter skills and click 'Generate' to create a new report.</p>
        )}
      </div>
    </div>
  );
};

export default SkillList;
