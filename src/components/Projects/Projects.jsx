import React from "react";
import Parallax from "./Parallax/Parallax";
import s from "./projects.module.css";
import v1 from "../../video/timer.mov";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";

const Projects = (props) => {
  return (
    <div id="project" className={s.projects}>
      <div className={s.note}>My Works</div>
      <div className={s.header}>Featured Works</div>
      <Tabs>
        <TabList className={s.tabList}>
          <Tab>All</Tab>
          <Tab>Website</Tab>
          <Tab>Count Timer</Tab>
          <Tab>Social App</Tab>
        </TabList>

        <TabPanel>
          <Parallax />
        </TabPanel>
        <TabPanel>
          <div>
            <p>
              Личная затея с данным проектом для ускорения и улучшения работы
              сотрудников организации.
            </p>
            <p>
              Поскольку по прежнему сотрудники используют рукописный ввод данных
              с последующим физическим хранением.
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <p>
            Простой таймер отсчитывающий время, которое осталось до нового года
          </p>{" "}
          <br />
          <div>
            <video
              width="900"
              height="500"
              controls="controls"
              src={v1}
            ></video>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <p>Этот проект разрабатывается в рамках курса с YouTube.</p>
            <p>Стек используемый в работе: React, Redux.</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
