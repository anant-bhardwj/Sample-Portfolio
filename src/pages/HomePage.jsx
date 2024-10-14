import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendations";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Recommendations />
      <Contact />
    </div>
  );
};

export default HomePage;
