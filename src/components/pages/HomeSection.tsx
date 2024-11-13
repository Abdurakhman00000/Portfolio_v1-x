import React from "react";
import Welcome from "./homeSection/Welcome";
import About from "./homeSection/About";
import Projects from "./homeSection/Projects";
import Contact from "./homeSection/Contact";

const HomeSection = () => {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default HomeSection;
