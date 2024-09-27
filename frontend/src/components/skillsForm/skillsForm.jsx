import React from "react";
import '../../styles/skills.css'
import arrow from '../../Assets/arrow2.png'

function Skills(){
    return(
        <>
        <div className="skill-home">
            <div className="skill-inside">
     <div className="skill-search">
        <h1 className="skill-heading">Skills</h1>
        <input type="text" placeholder="Type your skills here..." />
     </div>

     <div className="keywords">
        <button>UI/UX</button>
        <button>Project Management</button>
        <button>Sewing</button>
        <button>Hair</button>
        <button>Makeup</button>
        <button>Event Management</button>
        <button>Entertainment</button>
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