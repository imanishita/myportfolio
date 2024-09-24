import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaTwitter, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontainer">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            Kolkata, India
          </div>
          <div className="Phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <a href="tel:+919475848984" style={{ color: "#fff", textDecoration: "none" }}>
              +91 9475848984
            </a>
          </div>
          <div className="Email">
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <a href="mailto:imansishita17@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>
              imanishita17@gmail.com
            </a>
          </div>
        </div>
        <div className="right">
          <div className="socials">
            <a href="https://www.linkedin.com/in/manishita-b-b32815140/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://twitter.com/imanishita" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/imanishita" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
