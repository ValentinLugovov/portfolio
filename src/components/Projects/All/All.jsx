import React from "react";
import s from "./all.module.css";
import Items from "./Items/Items";

const All = (props) => {
  return (
    <div id="project" className={s.projects}>
    <Items />
    </div>
  );
};

export default All;
