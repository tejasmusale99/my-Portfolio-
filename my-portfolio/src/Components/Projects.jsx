import React, { useState } from "react";
import data_projects from "./Project_data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState(data_projects);


  const handleClickFilter = (name) => {
    const newArray = data_projects.filter((project) =>
      project.category.includes(name));
    setProjects(newArray);
  };

  const project_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="container projects"
      variants={project_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="projects_navbar">
        <NavLink className="project_inside_navBar active"  onClick={() => setProjects(data_projects)}>All</NavLink>
        <NavLink className="project_inside_navBar active"  onClick={() => handleClickFilter("react.js")}>React</NavLink>
        <NavLink className="project_inside_navBar active"  onClick={() => handleClickFilter("mongoDB")}>MongoDB</NavLink>
        <NavLink className="project_inside_navBar active"  onClick={() => handleClickFilter("node.js")}>Node</NavLink>
        <NavLink className="project_inside_navBar active"  onClick={() => handleClickFilter("Javascript, ","HTML5, ","CSS3, ")}>Javascript</NavLink>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
