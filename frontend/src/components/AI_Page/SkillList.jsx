import React, { useState, useEffect } from 'react';
import BusinessReportCard from './BusinessReportCard';
import './SkillList.css';
import axios from 'axios';

const SkillList = ({ user }) => {
    const [reports, setReports] = useState([]);
    const [skills, setSkills] = useState(''); // State to store the user's input skills
    const [loading, setLoading] = useState(false); // State to handle loading state

    // Function to fetch the reports for the logged-in user from the backend
    const fetchUserReports = async () => {
        try {
            const response = await axios.get('http://localhost:5001/api/user-reports', {
                headers: {
                    Authorization: `Bearer ${user.token}` // Add the user's token for authorization if needed
                }
            });
            setReports(response.data);
        } catch (error) {
            console.error('Error fetching reports:', error);
        }
    };

    // Function to generate the report based on input skills
    const generateReport = async () => {
        if (!skills) return; // Don't proceed if skills input is empty

        setLoading(true); // Set loading to true while fetching data
        try {
            const response = await axios.post(
                'http://localhost:5001/api/generate-full-report',
                { skills },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`, // Add the user's token for authorization if needed
                    },
                }
            );
            // Fetch user reports again to update the list
            fetchUserReports();
        } catch (error) {
            console.error('Error generating report:', error);
        } finally {
            setLoading(false); // Set loading to false once the API call is done
        }
    };

    useEffect(() => {
        if (user) {
            fetchUserReports();
        }
    }, [user]);

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
                        <div key={index}>
                            <BusinessReportCard
                                title="Business Idea"
                                description={report.idea}
                                timestamp={new Date(report.timestamp).toLocaleString()}
                            />
                            <BusinessReportCard
                                title="Business Plan"
                                description={report.plan}
                                timestamp={new Date(report.timestamp).toLocaleString()}
                            />
                            <BusinessReportCard
                                title="Mentors"
                                description={report.mentors}
                                timestamp={new Date(report.timestamp).toLocaleString()}
                            />
                        </div>
                    ))
                ) : (
                    <p>No reports available. Enter skills and click 'Generate' to create a new report.</p>
                )}
            </div>
        </div>
    );
};

export default SkillList;
