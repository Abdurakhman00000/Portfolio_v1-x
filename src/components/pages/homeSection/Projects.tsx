"use client"

import React from "react";
import { Element } from "react-scroll";
import scss from "./Projects.module.scss"

const Projects = () => {
  return (
    <Element name="projects">
      <section className={scss.Projects}>
        <div className="container_for_content">
          <div className={scss.content}>
          <h2>Projects Section</h2>
          <p>Coming soon...</p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects; 
