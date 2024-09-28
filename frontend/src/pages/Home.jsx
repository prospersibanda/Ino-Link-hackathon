import React from 'react'
import '../styles/home.css';
import heroimage from '../Assets/hero-image1.png'
import people from '../Assets/people.png'
import text from '../Assets/text.png'
import access from '../Assets/access1.png'
import search from '../Assets/search.png'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';



const Home = () => {
  return (
   
      <>
         <Navbar/>
      <div className='hero-section'>
   
        <div className='hero-heading'>
          <h1>Find a business idea, get industry help from mentors across the world and take control of your future</h1>
          <button className='hero-btn'>Explore ideas</button>
        </div>
       
        <div className='hero-image'>
          <img src={heroimage} alt="people talking in an officee" />
        </div>
        </div>
      <div className='hero-sub-heading'>
        <h2>Ready to start a business</h2>
      </div>
      <div className='hero-content'>
        <p>With the ever rising rate of unemployment, InnoLink helps bridge the gap between unemployed youth and industry entrepreneurs
          that are in their instrest niche and skill set, helping them to assist and guide them in getting all required skillls and knowledge 
          to help them start their own business. With Ai poweredd technology, Innolink ensures that the business ideas are tailored to your speific skills and interests
        </p>
       <div className='btn'>
        <Link to={'/signup'}>
        <button className='hero-btn'>Get started</button>
        </Link>
        </div>
       </div>
      


         <div className='home-sections'>

          <div className='section1'>
            <img src={ search }alt="microscope" />
            <div className='section-heading'>
              <h4>Explore Business Ideas</h4>
            </div>
            <div className='section-content'>
              Get access to hundreds of great AI generated business ideas while benefiting form real life feedback and mentorship from entrepreneurs.
            </div>
          </div>

            <div className='section1'>
            <img src={ text }alt="text speech" />
            <div className='section-heading'>
            <h4>Get feedback and assistance on your Ideas</h4>
            </div>
            <div className='section-content'>
              Share your idea with a community of mentors and like minded youth that share your interets 
            </div>
            </div>


            <div className='section1'>
            <img src={ access }alt="text speech" />
            <div className='section-heading'>
            <h4>Get feedback and assistance on your Ideas</h4>
            </div>
            <div className='section-content'>
              Share your idea with a community of mentors and like minded youth that share your interets 
            </div>
            </div>



            <div className='section1'>
            <img src={ people }alt="text speech" />
            <div className='section-heading'>
            <h4>Get feedback and assistance on your Ideas</h4>
            </div>
            <div className='section-content'>
              Share your idea with a community of mentors and like minded youth that share your interets 
            </div>
          </div>


        </div>

      </>
  )
}
  


export default Home