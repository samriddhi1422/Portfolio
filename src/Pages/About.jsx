import React from 'react'
import '../Styles/About.css'
import { BsArrowReturnRight } from "react-icons/bs";
import frame from '../assets/Frame.png'
import { aboutUspage } from '../text';
import { NavLink } from 'react-router-dom';

function About() {


    const skills = [
        'ReactJs',
        'JavaScript',
        'HTML',
        'CSS',
        'Java',
        'DSA',
        'React Native',
        'Figma',
        'Canva',
        'Git',
        'Github'
    ];
  return (
    <div className='about'>
      <div className='abt'>
      <div className='abt1'>
     <div className='abt-txt'>ABOUT</div>
     <div className='intro'>
        <p>{aboutUspage.intro}</p>
        
<p>{aboutUspage.intro2}</p>
     <div className='abt-btn'><a href='/Samriddhi-Shrivastava-GoogleDocs.pdf'download>
      <button><BsArrowReturnRight size={20}/> Download CV</button>
      </a></div>
     </div>
     </div>
     <div className='abt-2'>
      <img src={frame}></img>
     </div>
     </div>
     <div className='skills'>
      <div className='skl-txt'>Skills</div>

       <div className='skill-container'>
        
         {skills.map((skill, index) => (
                <div className='skl' key={index}>
                    <span className='dot'></span> {skill}
                </div>
            ))}
        </div>
      
           </div>
     <div className='exp'>

        <div className='exp-txt'>
          MY WORK EXPERIENCE
        </div>
        <div className='exp-container'>
          <div className='exp-detail'>
            <h4>Frontend Developer Intern - Docxito | Feb-Apr 2025</h4>
           <ul>
            
  <li>Developed and maintained responsive web pages using React.js and styled-components.</li>
  <li> Worked on cross-platform mobile app features using React Native.</li>
  <li>Collaborated closely with the design team to implement pixel-perfect UI.</li>
</ul>
          </div>
          <div className='exp-btn'>
            <button>
              <BsArrowReturnRight size={20}/>  <NavLink to="/projects">Explore My Projects</NavLink>
            </button>
          
          </div>
        </div>
     </div>
    </div>
    
  )
}

export default About