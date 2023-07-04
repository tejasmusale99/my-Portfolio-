import React from "react";
import HTML from "../Icons/html.png";
import CSS from "../Icons/css-3.png";
import JS from "../Icons/javaimg.png";
import logoreact from "../Icons/atom.png";
import logoredux from "../Icons/redux.png";
import git from "../Icons/git.png";
import bootstrap from "../Icons/boot.png";
import SkillIcon from "./SkillIcon";
import book from "../Icons/book.png";
import { motion } from "framer-motion";

const skillIcons = [
  {
    item: HTML,
    text: "HTML",
  },
  {
    item: CSS,
    text: "HTML",
  },
  {
    item: JS,
    text: "HTML",
  },
  {
    item: logoreact,
    text: "HTML",
  },
  {
    item: logoredux,
    text: "HTML",
  },
  {
    item: git,
    text: "HTML",
  },
  {
    item: bootstrap,
    text: "HTML",
  },
];

function Resume() {
  const resume_variant = {
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
    <>
      <div className="education_heading">
        <img src={book} alt="book" className="education_icon"/>
        <h3 >Education</h3>
      </div>
      <motion.div
        class="timeline"
        variants={resume_variant}
        initial="hidden"
        animate="visible"
      >
        <div class="resume_container right">
          <div className="resume-card_body">
            <h6 className="resume-card_title">BACHELOR OF ENGINEERING</h6>
            <h6 className="resume-card_name">2017-2021</h6>
            <p className="resume-card_details">
              D Y Patil Institute Of Engineering And Technology
              (Pune,Maharashtra)
            </p>
          </div>
        </div>
        <div class="resume_container right">
          <div className="resume-card_body">
            <h6 className="resume-card_title">SENIOR SECONDARY (12TH)</h6>
            <h6 className="resume-card_name">2016-2017</h6>
            <p className="resume-card_details">(Dhule,Maharashtra)</p>
          </div>
        </div>
        <div class="resume_container right">
          <div className="resume-card_body">
            <h6 className="resume-card_title">SECONDARY (10TH)</h6>
            <h6 className="resume-card_name">2014-2015</h6>
            <p className="resume-card_details">(Dhule,Maharashtra)</p>
          </div>
        </div>
      </motion.div>

      <h3 className="skills-heading ">My Skills</h3>

      <motion.div
        className="icon_container skills-list  content-card flex-row"
        variants={resume_variant}
        initial="hidden"
        animate="visible"
      >
        {skillIcons.map((itemIcons) => {
          return <SkillIcon icons={itemIcons.item} texts={itemIcons.text} />;
        })}
      </motion.div>
    </>
  );
}

export default Resume;
