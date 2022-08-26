import React from "react";
import s from "./skills.module.css";
import n from "../Navbar/navbar.module.css";
import js from "../img/icons/js.png";
import css from "../img/icons/css.png";
import git from "../img/icons/git.png";
import html from "../img/icons/html.png";
import react from "../img/icons/react.png";
import redux from "../img/icons/redux.png";

const Skills = (props) => {
  return (
    <div id="skills" className={s.skills}>
      <div className={s.one}>My Skills</div>
      <div className={s.two}>What My Programming Skills Included?</div>

      <div className={s.three}>
        I develop simple, intuitive and responsive user interface that helps
        users get things done with less effort and time with those technologies.
      </div>
      <div className={s.box}>
        <div className={s.miniBox}>
          <img src={js} alt="Ico"></img>
        </div>
        <div className={s.miniBox}>
          <img src={css} alt="Ico"></img>
        </div>
        <div className={s.miniBox}>
          <img src={git} alt="Ico"></img>
        </div>
        <div className={s.miniBox}>
          <img src={html} alt="Ico"></img>
        </div>
        <div className={s.miniBox}>
          <img src={react} alt="Ico"></img>
        </div>
        <div className={s.miniBox}>
          <img src={redux} alt="Ico"></img>
        </div>
        <div className={s.miniBox}></div>
        <div className={s.miniBox}></div>
        <div className={s.miniBox}></div>
        <div className={s.miniBox}></div>
        <div className={s.miniBox}></div>
        <div className={s.miniBox}></div>
      </div>
      <div>
        <button className={n.btn}>Hire Me</button>
      </div>
    </div>
  );
};

export default Skills;
