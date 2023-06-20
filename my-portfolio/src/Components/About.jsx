import React from "react";
import api from "../Icons/graphic-design.png";
import SkillCard from "./SkillCard";
function About() {
  const skills = [
    {
      icon: api,
      title: "Web Design",
      about:
        "The most modern website design with interactive UI/UX.",
    },
    {
      icon: api,
      title: "Web Development",
      about:
        "High-quality web apps at the professional level.",
    },
  ];

  return (
    <>
    <div className="about_info">
      <p className="about_para_first_line">
        I'm frontend Engineer from India, I build apps with a focus on ReactJS.
      </p>

      <p className="about_para_lines">
        I am having an experience of building high-performing, responsive,
        beautiful web applications to deliever a unique, intuitive user
        experience. I enjoy being challenged and working on projects that
        require me to step outside of my comfort zone.
      </p>

      <p className="about_para_lines">
        Front End : HTML-5, CSS-3, JavaScript-ES6, React.js, React query, Redux.
      </p>

      <p className="about_para_lines">CSS Frameworks : Bootstrap-5, Tailwind CSS.</p>

      <p className="about_para_lines">Tools I know : Postman, Git, Github,Chrome Dev tools.</p>

      <p className="about_para_lines">
        Currently I am exploring : Node.js (Express.js), Firebase and MongoDB in
        my free time.
      </p>
      </div>
      <div className="row">
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
      </div>
     
      </>
  );
}
export default About;
