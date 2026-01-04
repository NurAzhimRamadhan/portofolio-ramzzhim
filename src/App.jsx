import React from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Achievements from "./components/Achievements.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";




function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
