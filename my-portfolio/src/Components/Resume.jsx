import React from "react";
import HTML from "../Icons/html.png";
import CSS from "../Icons/css-3.png";
import JS from "../Icons/javaimg.png";
import logoreact from "../Icons/atom.png";
import logoredux from "../Icons/redux.png";
import git from "../Icons/git.png";
import bootstrap from "../Icons/boot.png";
import SkillIcon from "./SkillIcon";


const skillIcons = [
  {
    item: HTML,
    text:"HTML"
  },
  {
    item: CSS,
    text:"HTML"
  },
  {
    item: JS,
    text:"HTML"
  },
  {
    item: logoreact,
    text:"HTML"
  },
  {
    item: logoredux,
    text:"HTML"
  },
  {
    item: git,
    text:"HTML"
  },
  {
    item: bootstrap,
    text:"HTML"
  }
];

function Resume() {
  return (
    <>
    <h3 className="education_heading" >Education</h3>
      <div class="timeline">
        
        <div class="resume_container right">
          <div className="resume-card_body">
            <h6 className="resume-card_title">BACHELOR OF ENGINEERING</h6>
            <h6 className="resume-card_name">2017—2021</h6>
            <p className="resume-card_details">
              D Y Patil Institute Of Engineering And Technology
              (Pune,Maharashtra)
            </p>
          </div>
        </div>
        <div class="resume_container right">
          <div className="resume-card_body">
            <h6 className="resume-card_title">SENIOR SECONDARY (12TH)</h6>
            <h6 className="resume-card_name">2016—2017</h6>
            <p className="resume-card_details">(Dhule,Maharashtra)</p>
          </div>
        </div>
        <div class="resume_container right">
          <div className="resume-card_body">
            <h6 className="resume-card_title">SECONDARY (10TH)</h6>
            <h6 className="resume-card_name">2014—2015</h6>
            <p className="resume-card_details">(Dhule,Maharashtra)</p>
          </div>
        </div>
      </div>
      <h3 className="skills-heading ">Skills</h3>
      <div className="icon_container skills-list  content-card flex-row">
        {skillIcons.map((itemIcons) => {
          return <SkillIcon icons={itemIcons.item} texts={itemIcons.text}/>
        })}
        </div>
  
    </>
  );
}

export default Resume;
