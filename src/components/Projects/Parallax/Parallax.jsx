import React from "react";
import s from "./parallax.module.css";
import p1 from "../../img/crm.png";
import p2 from "../../img/social.png";
import p3 from "../../img/timer.png";
import p4 from "../../img/this.png";

const Parallax = (props) => {
  let bg = document.querySelectorAll(".mouse-parallax-bg");
  for (let i = 0; i < bg.length; i++) {
    bg[i].addEventListener("mousemove", function (e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;
      bg[i].style.transform = "translate(-" + x * 20 + "px, -" + y * 20 + "px)";
    });
  }
  return (
    <div id="project" className={s.projects}>
      <div className={s.parallaxes}>
        <div className={s.parallax1}>
          <div className="mouse-parallax">
            <div className="mouse-parallax-bg">
              <img className={s.img} src={p2} alt="car" />
            </div>
          </div>
        </div>
        <div className={s.parallax2}>
          <div className="mouse-parallax">
            <div className="mouse-parallax-bg">
              <img className={s.img} src={p3} alt="car" />
            </div>
          </div>
        </div>
        <div className={s.parallax3}>
          <div className="mouse-parallax">
            <div className="mouse-parallax-bg">
              <img className={s.img} src={p4} alt="car" />
            </div>
          </div>
        </div>
        <div className={s.parallax4}>
          <div className="mouse-parallax">
            <div className="mouse-parallax-bg">
              <img className={s.img} src={p1} alt="car" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
