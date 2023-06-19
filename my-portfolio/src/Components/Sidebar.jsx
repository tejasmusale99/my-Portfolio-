import React from "react";
import github from "../Icons/github.png";
import twitter from "../Icons/twitter.png";
import linkedin from "../Icons/linkedin.png";
import location from "../Icons/location.png";
import envelope from "../Icons/envelope.png";
import Avatar from "../Icons/avatar.jpg";
import resume from "../Icons/Resume.pdf";
import resumeicon from "../Icons/resume.png";

function Sidebar() {
  function handleEmailMe() {
    window.open("mailto:tejasmusale99@gmail.com");
  }
  return (
    <div className="sidebar">
      <img src={Avatar} alt="avatar" className="sidebar_avatar" />
      <div className="sidebar_myName">
        <h2>Tejas Musale</h2>
      </div>
      <div className="sidebar_name sidebar_title">
        <span>Frontend Engineer</span>
      </div>
      <div className="sidebar_social-icons my-2">
        <a href="">
          <img src={github} alt="github" className="sidebar_icon" />
        </a>
        <a href="">
          <img src={twitter} alt="twitter" className="sidebar_icon m-3" />
        </a>
        <a href="">
          <img src={linkedin} alt="linkedin" className="sidebar_icon" />
        </a>
      </div>
      <a href={resume} download="Resume.pdf">
        <div className="sidebar_item sidebar_resume">
          <img src={resumeicon} alt="resume" className="sidebar_icon" />
          Download Resume
        </div>
        <div class="horizontal-line"></div>
      </a>
      <div className="sidebar_contact">
        <div className="main-Email-container">
          <div className="display_Email">
            <div className=" sidebar_email" onClick={handleEmailMe}>
              <img
                src={envelope}
                alt="envelop"
                className="  sidebar_icon sidebar_emailicon"
              />
            </div>
            <div className="sidebar_box">
              <div className="sidebar_mainlabel">Email</div>
              <span className=" sidebar_label">
                tejasmusale99@gmail.com
              </span>
            </div>
          </div>
          <div className="main-location-container">
          <div className="display_Email">
            <div className="sidebar_email">
              <img src={location} alt="loacation" className="sidebar_icon" />
            </div>
            <div className="sidebar_box">
              <div className="sidebar_mainlabel">Location</div>
              <span className="sidebar_label">
                Maharashtra,india
              </span>
            </div>
          </div>
        </div>
        </div>
      
      </div>
      {/* <div className="sidebar_item sidebar_email" onClick={handleEmailMe}></div> */}
    </div>
  );
}

export default Sidebar;
