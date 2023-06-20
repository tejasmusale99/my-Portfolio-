import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("About");

  useEffect(()=>{
    let currentURL= window.location.href
    console.log(currentURL);
    if(currentURL.endsWith("/"))
    setActive("About")
    else if(currentURL.endsWith("/projects"))
    setActive("projects")
    else if(currentURL.endsWith("/resume"))
    setActive("Resume")
    else if(currentURL.endsWith("/blogs"))
    setActive("Blogs")
  },[active])
  return (
    <div className="navbar">
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
        {active !== "projects" && (
          <NavLink to="/projects">
          <div
            className="navbar_item"
            onClick={() => {
              setActive("projects");
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
    </div>
  );
}

export default Navbar;
