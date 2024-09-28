// Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={'/'}>
        <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li  className='acive'><a href="#home">Business idea</a></li>
        <Link to={'/dashboard'}>
        <li><a href="#mentor">Mentor</a></li>
        </Link>
        <Link to='/explore'>
        <li><a href="#resources">Resources</a></li>
        </Link>
        <Link to={'/skills'}>
        <li><a href="#how-it-works">Skills</a></li>
        </Link>
        <button><a href="#how-it-works" className='sign-up' >Sign Up</a></button>
      </ul>
    </nav>
  );
}

export default Navbar;
