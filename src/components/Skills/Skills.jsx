import React from "react";
import s from "./skills.module.css";
import n from "../Navbar/navbar.module.css";
import Items from "./Items/Items";

const Skills = (props) => {
  return (
    <div id="skills" className={s.skills}>
      <div className="mark">My Skills</div>
      <div className={s.headerBox}>
        <h1 className={s.header}>What My Programming Skills Included?</h1>
      </div>

      <div className={s.boxText}>
        <p className="text">
          Активно потребляю новую информацию по данным технологиям + изучаю
          новые библиотеки
        </p>
      </div>
      <Items />
      <div className={s.button}>
        <button className={n.btn} onClick={() => props.setShow(true)}>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Skills;
