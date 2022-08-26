import React from "react";
import s from "./projects.module.css";

const Projects = (props) => {
  let bg = document.querySelector(".mouse-parallax-bg");
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
  });
  return (
    <div id="project" className={s.projects}>
      <div class="mouse-parallax">
        <div class="mouse-parallax-bg">
        </div>
        <div class="mouse-parallax-fog-1"></div>
        <div class="mouse-parallax-fog-2"></div>
      </div>
    </div>
  );
};

export default Projects;
