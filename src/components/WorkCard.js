import "./WorkCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="projectcard">
      <img src={props.imgsrc} alt="image"/>
      <h2 className="projecttitle">{props.title}</h2>
        <div className="prodetails">
            <p>{props.text}</p>
            <div className="probtns">
            <NavLink to={props.view} className="btn">View</NavLink>
            <NavLink to={props.source} className="btn">Source</NavLink>


          </div>
        </div>
    </div>

  )
}

export default WorkCard
