import React, { useState} from 'react'
import '../Styles/Header.css'
import { NavLink } from 'react-router-dom';


export default function Header() {

    const[menuOpen , setmenuOpen]= useState(false);
    const toggleMenu =()=>setmenuOpen(!menuOpen);
    const closeMenu=()=>  setmenuOpen(false);


  return (
    <>
    <div className='navbar'>
        <div className='name'>SAMRIDDHI</div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <div className={`menus ${menuOpen ? 'show' : ''}`}>
        <ul type='none'>
          <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink></li>
          <li><NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink></li>
          <li><NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Services</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
    </>
  )
}
