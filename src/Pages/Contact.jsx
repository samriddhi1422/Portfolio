import React from 'react'
import { useState } from 'react';
import '../Styles/Contact.css'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };
  return (
    <div className='contact'>
  <div className='cnt-txt'>
    CONTACT
  </div>
  <div className='contact-box'>
    <div className='ct'>
     <div className='hello'>
    <span className='dot'></span>
    Hire me</div>
                <div className='contant-box-txt'>I'd love to hear from you!</div>
    </div>
 
 <div className='formContainer'>
  <form onSubmit={handleSubmit}  >
      <div>
        <label>Name <span className='req'>*</span></label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email Address <span className='req'>*</span></label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      
      <div>
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
 </div>
  </div>
  <div className='info-cont'>
    <div className='email'>
      <p className='me'>EMAIL ME</p>
      <p className='id'>samriddhi1422@gmail.com</p>
          </div>
    <div className='social'>
           <p className='me'>FIND ME</p>
           <ul type='none'>
            <li><a href='https://www.linkedin.com/in/samriddhi-shrivastava-07b00327a/' target='_blank'><IoLogoLinkedin size={45} fill='#82ff1f'/></a></li>
            <li><a href='https://github.com/samriddhi1422' target='_blank'><FaSquareGithub size={45} fill='#82ff1f'/></a></li>
            <li><a href=''><FaSquareTwitter size={45} fill='#82ff1f'/></a></li>
           </ul>
    </div>
  </div>
    </div>
  )
}

export default Contact