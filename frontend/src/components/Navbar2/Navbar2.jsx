// Navbar.js
import React from 'react';
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'




const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={'/'}>
        <img src={logo} alt="" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;