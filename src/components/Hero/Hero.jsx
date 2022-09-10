import React from "react";
import s from "./hero.module.css";
import avatar from "../img/avatar.png";

const Hero = (props) => {
  return (
    <div id="hero" className={s.hero}>
      <div className={s.photo}>
        <img src={avatar} alt="Avatar"></img>
      </div>
      <div className={s.name}>
        Hi, I Am <span>Valentin Lugovov</span>👋
      </div>
      <div className={s.who}>Junior Front-End Developer</div>
      <div className={s.phrase}>
        I design and code beautifully simple things, and I love what I do.
      </div>
    </div>
  );
};

export default Hero;
