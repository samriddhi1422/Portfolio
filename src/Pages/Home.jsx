import React from 'react'
import '../Styles/Home.css'
import frame from '../assets/Frame (1).png'
import { BsArrowReturnRight } from "react-icons/bs";
function Home() {
  return (
  <div className='home'>
    <div className='home1'>
  <div className='hello'>
    <span className='dot'></span>
    Hello World</div>
   <div className='int'>SAMRIDDHI <br/> SHRIVASTAVA</div>
   <div className='image'> <img src={frame}></img>  </div>
   </div>
   <div className='para'>
    <div className='show-para'>Hello! I’m Samriddhi, a passionate Frontend Developer and UI/UX Designer <br></br> dedicated to crafting seamless digital experiences and writing about life on Medium.</div>
    <div className='block-para'>Hello! I’m Samriddhi, a passionate Frontend Developer and UI/UX Designer  dedicated to crafting seamless digital experiences and writing about life on Medium.</div>
    <div className='home-btn'>
      <a href='/Samriddhi-Shrivastava-GoogleDocs.pdf'download>
      <button><BsArrowReturnRight size={20}/> Download CV</button>
      </a>
      <a href='https://medium.com/@samriddhi1422' target='_blank'>  <button> <BsArrowReturnRight size={20} />Read Blogs</button></a>
   </div>
    
   </div>
   </div>
  )
}

export default Home