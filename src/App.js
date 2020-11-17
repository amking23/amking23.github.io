import React, { useEffect } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-3237ERS5F1");
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
