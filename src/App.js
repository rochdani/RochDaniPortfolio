import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import ProfessionalExperience from "./components/ProfessionalExperience";
import SkillsEducation from "./components/SkillsEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingRobot from "./components/FloatingRobot";

export default function App() {
  return (
    <>
      <Navbar />
       <FloatingRobot />
      <Hero />
      <About />
      <ProfessionalExperience />
      <Projects />
      <SkillsEducation />
      <Contact />
      <Footer />
    </>
  );
}

