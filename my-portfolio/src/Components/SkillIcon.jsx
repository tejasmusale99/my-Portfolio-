import React from "react";

function SkillIcon(props) {

  return (
      <ul className="icons">
        <img src={props.icons} alt="icon" className="icons_img icon-box" />
      </ul>
  );
}

export default SkillIcon;
// {/* <div className="onHover">{props.texts}</div> */}