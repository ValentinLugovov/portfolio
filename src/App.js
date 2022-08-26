import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
