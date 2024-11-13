"use client";

import React from "react";
import scss from "./Welcome.module.scss";
import { Link as ScrollLink } from "react-scroll";

const Welcome = () => {
  const infoAboutMe = {
    head: "Hi, my name is",
    name: "ABDURAKHMAN ABDIBAITOV",
    job: "FRONTEND DEVELOPER",
    description:
      "As a passionate software developer, I specialize in crafting innovative digital technologies. My current focus is on creating accessible, user-centered products. I believe in the power of technology to transform lives.",
  };
  return (
    <section className={scss.Welcome}>
      <div className="container_for_content">
        <div className={scss.content}>
          <div className={scss.content_text}>
            <span>{infoAboutMe.head}</span>
            <h1>{infoAboutMe.name}</h1>
            <h2>{infoAboutMe.job}</h2>
            <div className="container_for_description">
              <p>{infoAboutMe.description}</p>
            </div>
            <button className="hover-target">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-50}
              >
                About Me
              </ScrollLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
