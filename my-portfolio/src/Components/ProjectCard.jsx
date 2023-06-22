import React from 'react'
import {Link} from "react-router-dom"

function ProjectCard({project:{name,image,deployed_url,github_url,category}}) {
  return (
    <div className="projectCard col-md-6 col-lg-4">
        <div className="projectCard_wrapper">
            <Link to={deployed_url} target="_blank">
                <img src={image} alt={name} className='projectCard_image' />
            </Link>
            <div className="projectCard__title">
            <h6 className='project_name'>{name}</h6>
            <p className='language_used'>{category}</p>
                <Link to={github_url} target="_blank">
                    <button className='projectCard_btn'>Open with github</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
