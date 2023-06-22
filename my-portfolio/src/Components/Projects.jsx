import React, { useState } from 'react'
import data_projects from './Project_data'
import ProjectCard from './ProjectCard'

function Projects() {

const [projects,setProjects]=useState(data_projects)

const handleClickFilter=(name)=>{
const newArray=data_projects.filter(project=>project.category.includes(name))
setProjects(newArray)
}

  return (
    <div className='container projects'>
      <div className="projects_navbar">
        <div onClick={()=>setProjects(data_projects)}>All</div>
        <div onClick={()=>handleClickFilter("react.js")}>React</div>
        <div onClick={()=>handleClickFilter("mongoDB")}>MongoDB</div>
        <div onClick={()=>handleClickFilter("node.js")}>Node</div>
        <div onClick={()=>handleClickFilter("javascript")}>javascript</div>
      </div>
     <div className="row">
        {
            projects.map(project=>
               <ProjectCard key={project.name} project={project}/>
            )
        }
        </div> 
    </div>
  )
}

export default Projects
