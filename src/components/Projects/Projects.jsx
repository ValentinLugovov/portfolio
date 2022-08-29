import React from "react";
import Parallax from "./Parallax/Parallax";
import s from "./projects.module.css";

const Projects = (props) => {
  return (
    <div id="project" className={s.projects}>
      <div className={s.note}>My Works</div>
      <div className={s.header}>Featured Works</div>
      <div className={s.panel}>
        <div className={s.box}>
          <a href="#s" className={s.active}>
            All
          </a>
        </div>
        <div className={s.box}>
          <a href="#s" className={s.app}>
            Site For Polisan
          </a>
        </div>
        <div className={s.box}>
          <a href="#s" className={s.app}>
            Count Timer
          </a>
        </div>
        <div className={s.box}>
          <a href="#s" className={s.app}>
            Social App
          </a>
        </div>
      </div>
      <Parallax />
    </div>
  );
};

export default Projects;
