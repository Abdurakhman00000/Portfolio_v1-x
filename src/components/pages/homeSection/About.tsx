"use client";

import React from "react";
import { Element } from "react-scroll";
import scss from "./About.module.scss";

const About = () => {
  const aboutText = {
    text1:
      "Hi! My name is Abdurahman, and I am frontend developer. My passion is creating beautiful anduser-friendly web applications that delight users. I am always striving to learn new technologies and improve my skills in order to create better solutions for my projects.",
    text2:
      "My goals are to continue growing in development, explore new frameworks and libraries, and work on projects that have real value and can improve users' everyday lives.",
    text3:
      "I am always open to new opportunities, collaborations, and projects where I can apply my knowledge and skills to solve interesting challenges.",
  };
  return (
    <Element name="about">
      <section className={scss.About}>
        <div className="container_for_content"> 
          <div className={scss.content}>
            <div className={scss.about_me_container}>
              <div className={scss.about_me_text}>
                <h1>
                  About <span>Me</span>
                </h1>
                <div className={scss.text}>
                  <p>{aboutText.text1}</p>
                  <p>{aboutText.text2}</p>
                  <p>{aboutText.text3}</p>
                </div>

                <div className={scss.skills}>
                  <h4><span>My</span> Skills:</h4>
                  <div className={scss.main_skill}>
                    <div className={scss.skill_left}>
                      <p><span>+</span> JavaScript</p>
                      <p><span>+</span> React</p>
                      <p><span>+</span> HTML</p>
                      <p><span>+</span> CSS/SCSS</p>
                      <p><span>+</span> Redux</p>
                      <p><span>+</span> Supabase</p>
                      <p><span>+</span> NodeJS</p>
                    </div>
                    <div className={scss.skill_right}>
                    <p><span>+</span> TypeScript</p>
                      <p><span>+</span> NextJS</p>
                      <p><span>+</span> Tailwind CSS</p>
                      <p><span>+</span> RTK-query</p>
                      <p><span>+</span> WebSocket</p>
                      <p><span>+</span> Prisma ORM</p>
                      <p><span>+</span> SQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={scss.about_me_img}>
              <div className={scss.my_img}></div>
              <div className={scss.img_border}></div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
