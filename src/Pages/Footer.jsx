import React from 'react'
import '../Styles/Footer.css'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
   <div className='footer'>
    <div className='fot-box'>
      <div className='fot-box-txt'>Let's Build Something Amazing Together</div>
      <div className='fot-box-links'>
        <a href='mailto:samriddhi1422@gmail.com'>Email Me</a> | <a href='https://www.linkedin.com/in/samriddhi-shrivastava-07b00327a/' target='_blank'>linkedIn</a> | <a href='https://github.com/samriddhi1422' target='_blank'>Github</a>
      </div>

    </div>
    <div className='fot-links'>
<ul type='none'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </div>
    <div className='copy'>
      <p class="footer-copy">© 2025 Samriddhi Shrivastava. All rights reserved.</p>
    </div>
   </div>
  )
}

export default Footer