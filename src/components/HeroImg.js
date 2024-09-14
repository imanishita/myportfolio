import "./HeroImgStyless.css";
import React from "react";
import IntroImg from "../Assets/codingimg6.jpg"
import ProfilePic from "../Assets/myimg.png"
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
                <p class="paragraph">
                I hold a Bachelor's degree in Physics with an 8.273 SGPA from Calcutta University and am currently pursuing a B.Tech in Electronics and Communication Engineering from the Institute of Radiophysics and Electronics, Calcutta University. 
With an insatiable thirst for knowledge,driven by a passion for continuous learning and growth, I am eager to contribute to the community by sharing insights and collaborating on impactful projects.

                </p>
            </div>
          <img className="myprofilepic" src = {ProfilePic}/>
        </div> 
      </div>
    );
  }
  export default HeroImg;