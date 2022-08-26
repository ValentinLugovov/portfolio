import React from "react";
import s from "./hero.module.css";
import avatar from "../img/avatar.png";

const Hero = (props) => {
  return (
    <div id="hero" className={s.hero}>
      <div className={s.one}>
        Hi, I Am <span>Valentin Lugovov</span>👋
      </div>
      <div className={s.two}>Junior Front-End Developer</div>
      <div className={s.three}>
        I design and code beautifully simple things, and I love what I do.
      </div>
      <div className={s.four}>
        <img src={avatar}></img>
      </div>
    </div>
  );
};

export default Hero;
