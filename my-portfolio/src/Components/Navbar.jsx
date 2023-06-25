import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("About");

  useEffect(() => {
    let currentURL = window.location.href;
    console.log(currentURL);
    if (currentURL.endsWith("/")) setActive("About");
    else if (currentURL.endsWith("/Projects")) setActive("Projects");
    else if (currentURL.endsWith("/resume")) setActive("Resume");
    else if (currentURL.endsWith("/blogs")) setActive("Blogs");
  }, [active]);

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition:{
        delay:0.2,duration:0.7,type:"spring"
      }
    },
  };

  return (
    <motion.div
      className="navbar"
      variants={navbar_variant}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar_active">{active}</div>
      <div className="navbar_items">
        {active !== "About" && (
          <NavLink to="/">
            <div
              className="navbar_item"
              onClick={() => {
                setActive("About");
              }}
            >
              About
            </div>
          </NavLink>
        )}
        {active !== "Resume" ? (
          <NavLink to="/resume">
            <div
              className="navbar_item"
              onClick={() => {
                setActive("Resume");
              }}
            >
              Resume
            </div>
          </NavLink>
        ) : null}
        {active !== "Projects" && (
          <NavLink to="/Projects">
            <div
              className="navbar_item"
              onClick={() => {
                setActive("Projects");
              }}
            >
              Projects
            </div>
          </NavLink>
        )}
        {active !== "Blogs" && (
          <NavLink to="/blogs">
            <div
              className="navbar_item"
              onClick={() => {
                setActive("Blogs");
              }}
            >
              Blogs
            </div>
          </NavLink>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
