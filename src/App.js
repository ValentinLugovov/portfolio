import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="App">
        <a href="#top" className="to-up">
          {" "}
        </a>
        <Navbar setShow={setShow} />
        <Hero />
        <AboutMe setShow={setShow} />
        <Skills setShow={setShow} />
        <Projects />
        <Contacts />
        <Modal show={show} onClose={() => setShow(false)} />
      </div>
    </div>
  );
};

export default App;
