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
            </div>
          <img className="myprofilepic" src = {ProfilePic}/>
        </div> 
      </div>
    );
  }
  export default HeroImg;