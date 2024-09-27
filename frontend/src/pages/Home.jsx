import React from 'react'
import '../styles/home.css';
import Navbar from '../components/Navbar/Navbar';
import heroimage from '../Assets/hero-image.png'


const Home = () => {
  return (
      <>
      <div className='hero-section'>
        <div className='hero-content'>
        <h1 className='hero-heading'>Start your journey to a successful business </h1>
        <br />
        <h5 className='hero-sub'>Find a tailored business idea generated by AI, get feedback from real people and take charge of your future </h5>
        </div>
        <div className='hero-image'>
          <img src={heroimage} alt="hero image" />
        </div>
        <div className='hero-btn'>
          <button className='explore-btn'>Explore business ideas</button>
        </div>
      </div>
      </>
  )
}
  


export default Home