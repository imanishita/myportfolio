import "./AboutContentStyles.css"
import React from 'react'
import Myskill from "../Assets/myskills.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <p>
        Hi! My name is Manishita Biswas. I'm from a small town called Siliguri, located at the base of Darjeeling Hill, and I now live in Kolkata. I completed my schooling at Techno India Group Public School in Siliguri, earned my B.Sc. degree from Gokhale Memorial Girls' College in Kolkata, and I'm currently pursuing a B.Tech in Electronics and Communication Engineering from the University of Calcutta.

        I'm very ambitious and extremely driven by passion, especially when it comes to technology. I've long aspired to work in the tech industry and am always eager to learn new things. Besides my love for technology, I enjoy painting, dancing, and watching movies, and I have won several accolades in painting and dancing since childhood. I hope that one day, I can achieve everything I wish for.
        </p>
        </div>
        <div className="right">
            <div className="imgcontainer">
                <img src={Myskill} className="img" alt="true"/>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
