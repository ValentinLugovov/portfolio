import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import AboutMeMobile from "./components/AboutMeMobile/AboutMeMobile";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import HeroMobile from "./components/HeroMobile/HeroMobile";
import Navbar from "./components/Navbar/Navbar";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useMediaQuery } from "react-responsive";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const [show, setShow] = useState(false);

  return (
    <div>
      {isDesktopOrLaptop && (
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
      )}
      {isTabletOrMobile && (
        <p className="sorry">
          Sorry, I didn 't have time to make an adaptive website for you
        </p>
      )}
      {isTabletOrMobile && (
        <div className="App">
          <a href="#top" className="to-up">
            {" "}
          </a>
          <NavbarMobile setShow={setShow}/>
          <HeroMobile />
          <AboutMeMobile setShow={setShow}/>
          <Skills setShow={setShow}/>
          <Projects />
          <Contacts />
          <Modal show={show} />
        </div>
      )}
    </div>
  );
};

export default App;
