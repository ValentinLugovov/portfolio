import React from "react";
import s from "./items.module.css";
import js from "../../img/icons/js.png";
import css from "../../img/icons/css.png";
import git from "../../img/icons/git.png";
import html from "../../img/icons/html.png";
import react from "../../img/icons/react.png";
import redux from "../../img/icons/redux.png";
import learning from "../../img/icons/reading.png";

let skillIcons = [
  { id: 1, icon: js },
  { id: 2, icon: css },
  { id: 3, icon: html },
  { id: 4, icon: git },
  { id: 5, icon: react },
  { id: 6, icon: redux },
  { id: 8, icon: learning },
  { id: 9, icon: learning },
  { id: 10, icon: learning },
  { id: 11, icon: learning },
  { id: 12, icon: learning },
  { id: 13, icon: learning },
];

const Items = (props) => {
  let skills = skillIcons.map((icon) => {
    return (
      <div className={s.miniBox}>
        <img src={icon.icon} alt="Ico"></img>
      </div>
    );
  });

  return <div className={s.box}>{skills}</div>;
};

export default Items;
