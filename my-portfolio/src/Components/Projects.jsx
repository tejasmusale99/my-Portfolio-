import React, { useState } from "react";
import data_projects from "./Project_data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";


function Projects() {
  const [projects, setProjects] = useState(data_projects);
const [active,setActive]=useState("All")

  const handleClickFilter = (name) => {
    const newArray = data_projects.filter((project) =>
      project.category.includes(name));
    setProjects(newArray);
    setActive(name)
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
        <div className={active==="All" && "projects_navbar-active"}  onClick={
          () => {
            setProjects(data_projects)
            setActive("All")
          }
        }>All</div>
        <div className={active==="ReactJs , HTML5, CSS3 " && "projects_navbar-active"}  onClick={() => handleClickFilter(`ReactJs , HTML5, CSS3 `)}>React</div>
        <div className={active==="Javascript, HTML5, CSS3 " && "projects_navbar-active"}  onClick={() => handleClickFilter(`Javascript, HTML5, CSS3 `)}>Javascript</div>
        <div className={active==="mongoDB" && "projects_navbar-active"}  onClick={() => handleClickFilter("mongoDB")}>MongoDB</div>
        <div className={active==="node.js" && "projects_navbar-active"}  onClick={() => handleClickFilter("node.js")}>Node</div>
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
