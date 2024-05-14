import React from "react";
import styles from "./Skills.module.css";
import { FaReact, FaSquareJs, FaSass, FaNodeJs,FaGitAlt   } from "react-icons/fa6";

function Skills() {
  return (
    <div className={styles.container}>
      <h3 className={styles.skills_title}>My Skills Set</h3>
      <ul className={styles.skills_list}>
        <li>
          <FaReact />
        </li>
        <li>
          <FaSquareJs />
        </li>
        <li>
          <FaSass />
        </li>
        <li>
          <FaGitAlt />
        </li>
        <li>
          <FaNodeJs />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
