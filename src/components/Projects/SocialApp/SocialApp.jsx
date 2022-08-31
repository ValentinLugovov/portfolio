import React from "react";
import social from "../../../video/social.mov";
import s from "../projects.module.css";

const SocialApp = (props) => {
  return (
    <div>
      <div className={s.header}>
        <p>Проект разрабатывается в рамках курса с YouTube.</p>
        <p>Стек используемый в работе: React, Redux.</p>
      </div>{" "}
      <br />
      <div>
        <video
          width="900"
          height="500"
          controls="controls"
          src={social}
        ></video>
      </div>
      <div className={s.link}>
        <a href="https://github.com/ValentinLugovov/social-app" target="_blank">
          Open project on GitHub
        </a>
      </div>
      <div className={s.link}>
        <a href="https://social-app-valentin.herokuapp.com/" target="_blank">
          Open project on Heroku
        </a>
      </div>
    </div>
  );
};

export default SocialApp;
