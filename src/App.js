import React, { StrictMode } from "react";
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";
import Section from "./views/shared/Section";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Experiences from "./views/Experiences";
import About from "./views/About";
import Contact from "./views/Contact";
import "./styles/index";

function App() {
  return (
    <>
      <Header />

      <StrictMode>
        <div className="section-wrapper">
          <Section name={"projects"} view={<Projects/>}/>
          <Section name={"experiences"}/>
          <Section name={"about"} />
          <Section name={"get-in-touch"} />
        </div>
      </StrictMode>

      <Footer />
    </>
  );
}

export default App;
