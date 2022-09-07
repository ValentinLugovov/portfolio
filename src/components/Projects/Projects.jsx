import React from "react";
import All from "./All/All";
import s from "./projects.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";
import SocialApp from "./SocialApp/SocialApp";
import Timer from "./Timer/Timer";
import Website from "./Website/Website";

const Projects = (props) => {
  return (
    <div id="project" className={s.projects}>
      <div className={s.note}>
        <p className="mark">My Works</p>
      </div>
      <div className={s.title}>
        <h1>Featured Works</h1>
      </div>
      <Tabs>
        <TabList className={s.tabList}>
          <Tab>All</Tab>
          <Tab>Website</Tab>
          <Tab>Count Timer</Tab>
          <Tab>Social App</Tab>
        </TabList>

        <TabPanel>
          <All />
        </TabPanel>
        <TabPanel>
          <Website />
        </TabPanel>
        <TabPanel>
          <Timer />
        </TabPanel>
        <TabPanel>
          <SocialApp />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
