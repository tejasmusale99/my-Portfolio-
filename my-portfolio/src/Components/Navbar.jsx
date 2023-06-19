import React, { useState } from 'react'

function Navbar() {
  const [active,setActive]=useState("About")
  return (
    <div className='navbar'>
      <div className="navbar_active">
        {active}
      </div>
      <div className="navbar_items">
        {active !== "About" && <div className="navbar_item" onClick={()=>{setActive("About")}}>About</div>}
        {active !== "Resume" ?<div className="navbar_item" onClick={()=>{setActive("Resume")}}>Resume</div>:null}
        {active !== "Project" && <div className="navbar_item" onClick={()=>{setActive("Project")}}>Projects</div>}
        {active !== "Blogs" && <div className="navbar_item" onClick={()=>{setActive("Project")}}>Blogs</div>}
        
      </div>
    </div>
  )
}

export default Navbar;
