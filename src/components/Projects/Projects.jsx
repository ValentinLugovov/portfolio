import React from "react";
import Parallax from "./Parallax/Parallax";
import s from "./projects.module.css";
// import Site from "./Site";
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
          <Tab>Site For Polisan</Tab>
          <Tab>Count Timer</Tab>
          <Tab>Social App</Tab>
        </TabList>

        <TabPanel>
          <Parallax />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
