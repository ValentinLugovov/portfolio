import React from "react";
import s from "./navbarMobile.module.css";

const NavbarMobile = (props) => {
  return (
    <div className={s.container}>
      <div className={s.nav}>
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
      </div>
    </div>
  );
};

export default NavbarMobile;
