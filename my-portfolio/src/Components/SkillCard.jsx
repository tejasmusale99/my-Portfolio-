import React from "react";

function SkillCard(props) {
  return (
    <>
      <div className="col-lg-6">
        <div className="skill-card">
          <img src={props.icon} alt="skill_icon" className="skill_card_icon" />
          <div className="skill-card-body">
            <h6 className="skill-card-title">{props.title}</h6>
            <p className="skill_card_content">{props.about}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillCard;
