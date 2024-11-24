import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-content'>
        <div className='logo'>Mehak</div>
        <ul className='menu'>
          <li className='menu-item'><a href='#hero'>Home</a></li>
          <li className='menu-item'><a href="#About">About</a></li>
          <li className='menu-item'><a href="#projects">Projects</a></li>
          <li className='menu-item'><a href="#Skills">Skills</a></li>
          <li className='menu-item'><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
