"use client";

import React, { useState } from "react";
import "./BurgerMenu.scss";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main_burger">
        <div
          className={`burger-menu ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-50}
                className="hover-target"
                onClick={toggleMenu}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-50}
                className="hover-target"
                onClick={toggleMenu}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-50}
                className="hover-target"
                onClick={toggleMenu}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                className="hover-target"
                onClick={toggleMenu}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>


          <div className="burger_social_media">
            <a
              href="https://github.com/Abdurakhman00000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/aaabdibaitov/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/abdurakhman-abdibaitov-b661a62b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:abdibaitovabdurahman@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <SiGmail />
            </a>
          </div>


          <div className="menu-footer">
            <button className="resume-btn">Resume</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
