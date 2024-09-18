import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            {}
            <Link to="/">
                <h1>Manishita Biswas</h1>
            </Link>

            {}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" onClick={handleClick}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleClick}>About</Link>
                </li>
                <li>
                    <Link to="/project" onClick={handleClick}>Project</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={handleClick}>Contact</Link>
                </li>
            </ul>

            {}
            <div className="hamburger" onClick={handleClick}>
                {}
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    );
}

export default Navbar;
