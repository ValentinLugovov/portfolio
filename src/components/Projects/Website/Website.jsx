import React from "react";
import s from "../projects.module.css";
import website from "../../../video/website.mov";

const Website = (props) => {
  return (
    <div>
      <div className={s.header}>
        <p>
          Данный проект задуман для ускорения и улучшения работы сотрудников
          организации.
        </p>
        <p>
          Так как сотрудники используют рукописный ввод данных с последующим
          физическим хранением.
        </p>
      </div>
      <br />
      <div>
        <video
          width="900"
          height="500"
          controls="controls"
          src={website}
        ></video>
      </div>
      <div className={s.link}>
        <a href="https://github.com/ValentinLugovov/Website-JS" target="_blank">
          Project on GitHub JS-version
        </a>
      </div>
      <div className={s.link}>
        <a
          href="https://github.com/ValentinLugovov/Website-React"
          target="_blank"
        >
          Project on GitHub React-version
        </a>
      </div>
    </div>
  );
};

export default Website;
