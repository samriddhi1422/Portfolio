import React from 'react'
import '../Styles/Services.css'
import { BsArrowReturnRight } from "react-icons/bs";
import { SiBlackmagicdesign } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa6";
import { TbWriting } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
function Service() {
  return (
    <div className='service'>
      <div className='txt-serv'>
         <div className='hello'>
    <span className='dot'></span>
    What I Offer</div>
      <div className='serv-txt'>SERVICES</div>
      </div>
     
   <div class="container">
    
    <div class="card web-design">
      <div class="icon"><SiBlackmagicdesign size={35}/></div>
      <h2>Web Design</h2>
      <p>Creating visually stunning and user-friendly websites is at the heart of what I do.</p>
      <div class="features">
        <div>Custom Tailored Design</div>
        <div>Responsive Layouts</div>
        <div>Custom Tailored Design</div>
      </div>
       <NavLink to="/projects"><button class="button"><BsArrowReturnRight size={20}/> Check Projects</button></NavLink>
    </div>

    <div class="card development">
      <div class="icon"><FaConnectdevelop size={35}/></div>
      <h2>Development</h2>
      <p>I bring your designs to life with clean, efficient, and high-performing code.</p>
      <div class="features">
        <div>ReactJs & CSS Expertise</div>
        <div>Cross-Browser Compatibility</div>
        <div>Faster Load Times</div>
      </div>
      <NavLink to="/projects"><button class="button"><BsArrowReturnRight size={20}/> Check Projects</button></NavLink>
      
    </div>

    <div class="card brand-identity">
      <div class="icon"><TbWriting size={35}/></div>
      <h2>Blog Writing</h2>
      <p>Crafting compelling, SEO-optimized blog posts that drive traffic and engage your audience.</p>
      <div class="features">
        <div>blogs on self love, Productivity & Growth</div>
        <div>Audience-Centric Content</div>
        <div>Storytelling That Converts</div>
      </div>
      <a href='https://medium.com/@samriddhi1422' target='_blank'><button class="button"><BsArrowReturnRight size={20}/>Read Blogs</button></a>
      
    </div>
  </div>
  </div>
  )
}

export default Service