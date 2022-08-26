import React from "react";
import s from "./aboutMe.module.css";
import photo from "../img/photo.png";
import btn from "../Navbar/navbar.module.css";

const AboutMe = (props) => {
  return (
    <div id="about" className={s.aboutMe}>
      <div>
        <img src={photo}></img>
      </div>
      <div>
        <div className={s.one}>Who I am</div>
        <div className={s.two}>About Me</div>
        <div className={s.three}>
          Hi! I’m Kartik Bansal, and I’m a designer & developer who has passion
          for building clean web applications with intuitive functionality. I
          enjoy the process of turning ideas into reality using creative
          solutions. I’m always curious about learning new skills, tools, and
          concepts. In addition to working on various solo full stack projects,
          I have worked with creative teams, which involves daily stand-ups and
          communications, source control, and project management.
        </div>
        <div className={s.btn}>
          <button className={btn.btn}>Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
