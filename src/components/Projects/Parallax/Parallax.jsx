import React from "react";
import s from "./parallax.module.css";
import p1 from "../../img/crm.png";
import p2 from "../../img/social.png";
import p3 from "../../img/timer.png";
import p4 from "../../img/this.png";

const Parallax = (props) => {
  return (
    <div id="project" className={s.projects}>
      <div className={s.parallaxes}>
        <div className={s.parallax1}>
          <img className={s.img} src={p2} alt="socialApp" />
        </div>
        <div className={s.parallax2}>
          <img className={s.img} src={p3} alt="countTimer" />
        </div>
        <div className={s.parallax3}>
          <img className={s.img} src={p4} alt="portfolioApp" />
        </div>
        <div className={s.parallax4}>
          <img className={s.img} src={p1} alt="website" />
        </div>
      </div>
    </div>
  );
};

export default Parallax;
