import React from 'react'
import '../Styles/Project.css'
import { useState } from 'react'
import { Project } from '../Project'
import { BsArrowReturnRight } from "react-icons/bs";
const categories =["all","dev","blog","UI"];
function Projects() {
  const[activeCategory ,setactiveCategory] = useState("all");
   const filteredData = 
   activeCategory=="all"
   ? Project
   :Project.filter((project)=>project.category==activeCategory);
  return (
    <div className='projects'>
      <div className='project-txt'>PROJECTS</div>
      <div className='Project-box'>
        <div className='project-container'>
          <div className='category-container'>
            <button onClick={()=>setactiveCategory("all")}>All</button>
            <button onClick={()=>setactiveCategory("dev")}>Development</button>
            <button onClick={()=>setactiveCategory("UI")}>Design</button>
            <button onClick={()=>setactiveCategory("Blog")}>Blogs</button>
          </div>
          <div className='project-card'>
         {filteredData.map((project) => (
              <div key={project.id}>
                <h4 className='title'><BsArrowReturnRight size={25} fill='#82ff1f'/>{project.title}</h4>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
                {project.category === "dev" && (
      <a href={project.link} target='_blank'><BsArrowReturnRight/>Live Application</a>
    )}
    
    {project.category === "Blog" && (
      <a href={project.link} target='_blank'><BsArrowReturnRight/>Read Blog Here</a>
    )}

    {project.category === "UI" && (
      <a href={project.link} target='_blank'><BsArrowReturnRight/>Visit Prototype</a>
    )}
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects