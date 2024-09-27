import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.css';
import profile from '../assets/profile.png'
import heroimage from '../assets/hero-image.png'


const Home = () => {
  return (
    <div>
      <>
      <div className='navBar'>
        <div className='logo'>InnoLink</div>
        <div className='nav-btns'>
          <Link to="/">
          <button>Business Idea</button>
          </Link>
          <Link to="/dashboard">
          <button>Become A Mentor</button>
          </Link>
          <Link to="/explore">
          <button>Resources</button>
          </Link>
          <Link to="*">
          <button>How it Works</button>
          </Link>  
          <Link to="*">
          <button><img src={profile} alt="profile icon" className='profile-icon' /></button>
          </Link>  
        </div>
      </div>
      
      <div className='hero-section'>
        <div className='hero-content'>
        <h1 className='hero-heading'>Start your journey to a successful business </h1>
        <br />
        <h5 className='hero-sub'>Find a tailored business idea generated by AI, get feedback from real people and take charge of your future </h5>
        </div>
        <div className='hero-image'>
          <img src={heroimage} alt="hero image" />
        </div>
      </div>

      
      
      
      </>













    </div>
  )
}

export default Home