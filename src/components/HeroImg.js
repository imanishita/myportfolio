import "./HeroImgStyless.css";
import React from "react";
import IntroImg from "../Assets/codingimg6.jpg"
import ProfilePic from "../Assets/myimg.png"
import Resume from "../Assets/ResumeManishitaBiswas.pdf"

function HeroImg() {
    return (
      <div className ="hero">
        <div className="mask">
          <img className="introimg" src={IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
        <div class="text-content">
                <h1>Hi! I'm Manishita Biswas</h1>
                <h2>Technology and Feline enthusiast</h2>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  <br></br>
                  <br></br>
                  <button className="btn">Resume</button>
              </a>
            </div>
            <br></br>
            <br></br>
          <img className="myprofilepic" src = {ProfilePic}/>
        </div> 
      </div>
    );
  }
  export default HeroImg;