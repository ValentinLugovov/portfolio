import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="App">
          <a href="#top" className="to-up">
            {" "}
          </a>
          <Navbar />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contacts />
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
          <Navbar />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contacts />
        </div>
      )}
    </div>
  );
};

export default App;
