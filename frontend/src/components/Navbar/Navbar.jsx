// Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
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
        <li  className='acive'><a href="#home">Home</a></li>
        <li><a href="#mentor">Mentor</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#how-it-works">How it works</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
