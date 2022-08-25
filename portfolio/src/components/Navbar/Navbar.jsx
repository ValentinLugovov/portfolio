import React from "react";
import s from "./navbar.module.css";
import logo from "../img/logo.png";

const Navbar = (props) => {
  return (
    <div className={s.nav}>
      <div className={s.box1}>
        <img src={logo}></img>
      </div>
      <div className={s.box2}>Home</div>
      <div className={s.box3}>About</div>
      <div className={s.box4}>
        <a href="#skills">Skills</a>
      </div>
      <div className={s.box5}>Portfolio</div>
      <div className={s.box6}>Contact</div>
      <div className={s.box7}>
        <button className={s.btn}>Hire Me</button>
      </div>
    </div>
  );
};

export default Navbar;
