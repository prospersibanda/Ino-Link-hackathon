import React from 'react'
import '../styles/home.css';
import heroimage from '../Assets/hero-image1.png'
import search from '../Assets/search.png'
import text from '../Assets/text.png'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
      <>
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
        <p>With the ever rising rate of unemployment, InnoLink helps bridgee the gap between unemployed youth and industry entrepreneurs
          that are in their instrest niche and skill set, helping them to assist and guide them in getting all required skillls and knowledge 
          to help them start their own business. With Ai poweredd technology, Innolink ensures that the business ideas are tailored to your speific skills and interests
        </p>
        <button className='hero-btn'>Get started</button>
       </div>
       
      



      <div className='home-body'>
         <div className='home-heading'>
          <h2>How InnoLink Works</h2>
         </div>
         <div className='home-content'>
        <p>Innolink is an innovative online platform designed to empower unemployed youth by connecting them with creative business opportunities and experienced mentors.
           The website facilitates the journey from aspiration to action for young individuals seeking to establish their own ventures. 
           Upon signing up, users can register as either youth entrepreneurs or mentors, filling out profiles that detail their skills, interests, and experiences.
           Leveraging advanced AI algorithms, Innolink generates personalized business ideas tailored to each user, helping them discover entrepreneurial paths they may not have considered. 
           Additionally, the platform provides access to a network of mentors—established entrepreneurs and industry professionals—who offer guidance and practical advice, fostering learning and confidence. 
           Innolink also equips users with valuable resources, including guides and templates, to aid them in planning and executing their business ventures. 
           By offering personalized support and reducing barriers to entry, Innolink significantly empowers unemployed youth, fostering creativity and innovation while addressing the challenge of youth unemployment.</p>
         </div>
        </div>


         <div className='home-sections'>

          <div className='section1'>
            <img src={search }alt="microscope" />
            <div className='section-heading'>
              <h4>Explore Business Ideas</h4>
            </div>
            <div className='section-content'>
              Get access to hundreds of great AI generated business ideas while benefiting form real life feedback and mentorship from entrepreneurs.
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
            <img src={ text }alt="text speech" />
            <div className='section-heading'>
            <h4>Get feedback and assistance on your Ideas</h4>
            </div>
            <div className='section-content'>
              Share your idea with a community of mentors and like minded youth that share your interets 
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


        </div>
        

      <div className='start-section'>
        <div className='start-heading'>
          <h2>Ready to get started?</h2>
        </div>
        <div className='start-btn'>
          <Link to="/signup">
          <button className='start-button'>Get started</button>
          </Link>
        </div>
      </div>


      </div>
      </>
  )
}
  


export default Home