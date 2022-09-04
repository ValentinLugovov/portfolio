import React from "react";
import s from "./skills.module.css";
import n from "../Navbar/navbar.module.css";
import Items from "./Items/Items";

const Skills = (props) => {
  return (
    <div id="skills" className={s.skills}>
      <div className={s.one}>My Skills</div>
      <div className={s.two}>What My Programming Skills Included?</div>

      <div className={s.three}>
        Активно потребляю новую информацию по данным технологиям + изучаю новые
        библиотеки
      </div>
      <Items />
      <div>
        <button className={n.btn} onClick={() => props.setShow(true)}>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Skills;
