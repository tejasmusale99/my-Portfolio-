import React from "react";
import { Link } from "react-router-dom";
import location from "../Icons/location.png";
import envelope from "../Icons/envelope.png";
import Avatar from "../Icons/avatar.jpg";
import resume from "../Icons/Resume.pdf";
import resumeicon from "../Icons/resume.png";
import { motion } from "framer-motion";

function Sidebar() {
  function handleEmailMe() {
    window.open("mailto:tejasmusale99@gmail.com");
  }
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={Avatar} alt="avatar" className="sidebar_avatar" />
      <div className="sidebar_myName">
        <h2>Tejas Musale</h2>
      </div>
      <div className="sidebar_name sidebar_title">
        <span>Frontend Engineer</span>
      </div>
      <div className="sidebar_social-icons my-2">
        <Link to="https://github.com/tejasmusale99" target="_blank">
          <i className="fa-brands fa-github fa-fade sidebar_icon"></i>
        </Link>
        <Link to="https://twitter.com/tejasmusale99" target="_blank">
          <i className="fa-brands fa-twitter fa-fade sidebar_icon m-3"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/tejas-musale-2a86b2171/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin fa-fade sidebar_icon"></i>
        </Link>
      </div>

      <div class="horizontal-line"></div>
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
              <span className=" sidebar_label">tejasmusale99@gmail.com</span>
            </div>
          </div>
          <div className="main-location-container">
            <div className="display_Email">
              <div className="sidebar_email">
                <img src={location} alt="loacation" className="sidebar_icon" />
              </div>
              <div className="sidebar_box">
                <div className="sidebar_mainlabel">Location</div>
                <span className="sidebar_label">Maharashtra,india</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href={resume} download="Resume.pdf">
        <div className="sidebar_item sidebar_resume">
          <img src={resumeicon} alt="resume" className="sidebar_icon" />
          Resume
        </div>
      </a>
    </motion.div>
  );
}

export default Sidebar;
