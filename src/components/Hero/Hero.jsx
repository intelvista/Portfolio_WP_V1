import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, its' me</p>
            <h3 className={styles.text_2}>Worapol Potijinda</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "10px" }}> I'm a</span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Software Developer ",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "full stack developer",
                  2000,
                ]}
                speed={30}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
                Dev / IT support
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
           
              <div className={styles.hero_img}></div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
