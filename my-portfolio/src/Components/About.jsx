import React from "react";
import webDevelop from "../Icons/web-develop.png";
import webDesign from "../Icons/web-design.png";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

function About() {
  const skills = [
    {
      icon:webDesign,
      title: "Web Design",
      about:
        "The most modern website design with interactive UI/UX.",
    },
    {
      icon:  webDevelop,
      title: "Web Development",
      about:
        "High-quality web apps at the professional level.",
    },
  ];

  const about_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
  
      opacity: 1,
      transition:{
        delay:0.1,duration:0.6,
      }
    },
  }

  return (  
    <>
    <motion.div className="about_info"
      variants={about_variant}
      initial="hidden"
      animate="visible"
    >


      <p className="about_para_first_line">
        I'm <span className="text-highlight">Frontend Engineer</span> from India, I build apps with a focus on <span className="text-highlight">ReactJS.</span>.
      </p>

      <p className="about_para_lines">
        I have experience building high-performing, responsive,
        Attractive web applications to deliver a unique, intuitive user
        experience. I enjoy being challenged and working on projects requiring me to step outside my comfort zone.
      </p>

      <p className="about_para_lines">
        Front End : <span className="text-highlight">HTML-5, CSS-3, JavaScript-ES6, React.js, React query, Redux.</span>
      </p>

      <p className="about_para_lines">CSS Frameworks :<span className="text-highlight"> Bootstrap-5, Tailwind CSS.</span></p>

      <p className="about_para_lines">Tools I know : <span className="text-highlight">Postman, Git, Github,Chrome Dev tools.</span></p>

      <p className="about_para_lines">
        Currently I am exploring : <span className="text-highlight">Node.js (Express.js), Firebase and MongoDB</span> in
        my free time.
      </p>
      </motion.div>
      <motion.div className="row"
       variants={about_variant}
       initial="hidden"
       animate="visible"
      >
        {skills.map((item, index) => {
          return (
            <SkillCard
              icon={item.icon}
              title={item.title}
              about={item.about}
              key={index}
            />
          );
        })}
      </motion.div>
     
      </>
  );
}
export default About;
