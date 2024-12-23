"use client";

import React, { useState, useEffect } from "react";
import scss from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "@/components/ui/burgerMenu/BurgerMenu";
import { Element } from "react-scroll";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resume = ""

  return (
    <Element name="home">
      <header className={`${scss.Header} ${isScrolled ? scss.scrolled : ""}`}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.Header_Logo}>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-50}
                className="hover-target"
              >
                <h1 className="hover-target">ADEV</h1>
              </ScrollLink>
            </div>

            <div className={scss.Header_right}>
              <div className={scss.Header_Nav}>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="hover-target"
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="hover-target"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="hover-target"
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="hover-target"
                >
                  Contact
                </ScrollLink>
              </div>
              <div className={scss.Resume_button}>
                <button>
                <a href='/AbdurakhmanAbdibaitovFrontend-resume-v8.pdf' download className="hover-target">Resume</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenu />
      </header>
    </Element>
  );
};

export default Header;
