import React from "react";
import s from "./navbar.module.css";
import logo from "../img/logo.png";

const Navbar = (props) => {
  return (
    <div className={s.nav}>
      <div className={s.box1}>
        <img src={logo} alt="Logo"></img>
      </div>
      <div className={s.box2}>
        <a href="#hero">Home</a>
      </div>
      <div className={s.box3}>
        <a href="#about">About</a>
      </div>
      <div className={s.box4}>
        <a href="#skills">Skills</a>
      </div>
      <div className={s.box5}>
        <a href="#project">Portfolio</a>
      </div>
      <div className={s.box6}>
        <a href="#contact">Contact</a>
      </div>
      <div className={s.box7}>
        <button className={s.btn}>Hire Me</button>
      </div>
    </div>
  );
};

export default Navbar;
