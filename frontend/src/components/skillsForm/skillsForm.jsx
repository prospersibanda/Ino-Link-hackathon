import React, { useState } from "react";
import '../../styles/skills.css'
import arrow from '../../Assets/arrow2.png'

function Skills(){
    const [skills, setSkills] = useState(''); // State to hold the current input value
    const [keywords, setKeywords] = useState([]); // State to hold the list of skills/keywords

    // Function to handle input changes
    const handleInputChange = (e) => {
        setSkills(e.target.value);
    };

    // Function to handle adding a skill to the keywords list
    const addSkill = (e) => {
        if (e.key === 'Enter' && skills.trim() !== '') {
            setKeywords([...keywords, skills]); // Add the skill to the array
            setSkills(''); // Clear the input field
        }
    };
 // Function to remove a skill by its index
 const removeSkill = (indexToRemove) => {
    setKeywords(keywords.filter((_, index) => index !== indexToRemove));
};




    return(
        <>
        <div className="skill-home">
            <div className="skill-inside">
     <div className="skill-search">
        <h1 className="skill-heading">Skills</h1>
        <input type="text" 
        placeholder="Type your skills here..."
        value={skills}
        onChange={handleInputChange} 
        onKeyDown={addSkill}
         />
     </div>

     <div className="keywords">
        <button>
     {keywords.map((keyword, index) => (
     <span key={index} className="keyword">
         {keyword}
         <button className="remove-button" onClick={() => removeSkill(index)}>
                 &times;
                </button>
     </span>
    ))}
    </button>

     </div>

     <div className="skills-ques">
        <div className="skills-content">
        <h4 className="questions">Are there any common problems your skills can help solve</h4>
        <span className="arrow">
            <img src={arrow} alt="arrow" />
        </span>
        </div>
        <div className="input">
            <input type="text" />
        </div>

        <div className="skills-content">
        <h4 className="questions">What are your main goals for starting a business?</h4>
        <span className="arrow">
            <img src={arrow} alt="arrow" />
        </span>
        </div>
        <div className="input">
            <input type="text" />
        </div>

        <div className="skills-content">
        <h4 className="questions">What resources could heelp you grow or improve your business</h4>
        <span className="arrow">
            <img src={arrow} alt="arrow" />
        </span>
        </div>
        <div className="input">
            <input type="text" />
        </div>
        
        
     </div>
     </div>
     </div>
</>
    )
}



export default Skills;