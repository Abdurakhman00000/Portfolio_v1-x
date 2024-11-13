import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./SocialIcons.module.scss";
import { SiGmail } from "react-icons/si";


const SocialIcons: React.FC = () => {
  return (
    <div className={styles.fixedIcons}>
      <a
        href="https://github.com/Abdurakhman00000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover-target"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/aaabdibaitov/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover-target"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/abdurakhman-abdibaitov-b661a62b4/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover-target"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:abdibaitovabdurahman@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover-target"
      >
        <SiGmail/>
      </a>

      <div className={styles.line}></div>
    </div>
  );
};

export default SocialIcons;
