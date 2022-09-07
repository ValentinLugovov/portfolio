import React from "react";
import s from "./aboutMe.module.css";
import btn from "../Navbar/navbar.module.css";
import me from "../img/photo.PNG";

const AboutMe = (props) => {
  return (
    <div id="about" className={s.aboutMe}>
      <div>
        <img src={me} alt="UserPhoto" className={s.me}></img>
      </div>
      <div className={s.contentBox}>
        <div className="mark">Who I am</div>
        <div>
          <h1>About Me</h1>
        </div>
        <div className="text">
          Привет! Я начинающий фронтенд разработчик, который находится в начале
          своего пути. Начал я своё знакомство с JavaScript, с книг портала
          code.mu "Основной учебник" и "Высший учебник". Сейчас черпаю
          информацию из YouTube, Habr, StackOverFlow, а так же из документаций.
          Работаю над собственным проектом - веб приложение для заполнения и
          хранения документов в организации, можно сказать CRM'ка в миниатюре.
          Начинал его на нативном JS, но постепенно перевожу его на React. Также
          Тут можно найти другие мои "более стандартные" работы для портфолио.
        </div>
        <div className={s.btnBox}>
          <button className={btn.btn} onClick={() => props.setShow(true)}>
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
