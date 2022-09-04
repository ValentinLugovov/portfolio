import React from "react";
import s from "./navbar.module.css";
import logo from "../img/logo.png";

const Navbar = (props) => {
  return (
    <div className={s.container}>
      <div className={s.nav}>
        <div className={s.box1}>
          <img src={logo} alt="Logo"></img>
        </div>
        <div className={s.box2}>
          <a href="#top" className={s.a}>
            Home
          </a>
        </div>
        <div className={s.box3}>
          <a href="#about" className={s.a}>
            About
          </a>
        </div>
        <div className={s.box4}>
          <a href="#skills" className={s.a}>
            Skills
          </a>
        </div>
        <div className={s.box5}>
          <a href="#project" className={s.a}>
            Portfolio
          </a>
        </div>
        <div className={s.box6}>
          <a href="#contact" className={s.a}>
            Contact
          </a>
        </div>
        <div className={s.box7}>
          <button className={s.btn} onClick={() => props.setShow(true)}>
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
