import React from "react";
import timer from "../../../video/timer.mov";
import s from "../projects.module.css";

const Timer = (props) => {
  return (
    <div>
      <p className={s.header}>
        Простой таймер отсчитывающий время, которое осталось до нового года
      </p>{" "}
      <br />
      <div>
        <video width="900" height="500" controls="controls" src={timer}></video>
      </div>
      <div className={s.link}>
        <a href="https://github.com/ValentinLugovov/NY-timer" target="_blank">
          Open project on GitHub
        </a>
      </div>
    </div>
  );
};

export default Timer;
