import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"
import React from "react";

const Work = () => {
  return (
    <div className="workcontainer">
        <h1 className="projectheading">Projects</h1>
        <div className="projectcontainer">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}  
            />
          );
        })}
        </div>
      
    </div>
  );
}

export default Work
