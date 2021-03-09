import React, { useState, useRef, useEffect, StrictMode } from "react";
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";
import Section from "./views/shared/Section";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Experiences from "./views/Experiences";
import About from "./views/About";
import Contact from "./views/Contact";
import skewScrolling from "./myCustom/skewScrolling";
import "./styles/index";
import useWindowSize from "./myCustom/useWindowSize";

function App() {
  const sectionWrapper = useRef();
  const scrollDiv = useRef();
  const currentSection = useState();
  const size = useWindowSize();
  const skew = skewScrolling;

  useEffect(() => {
    const height = sectionWrapper.current.scrollHeight;
    scrollDiv.current.style.setProperty("height", `${height}px`);
  }, [size.height, size.width]);

  useEffect(() => {
    requestAnimationFrame(() => skew(sectionWrapper.current, size));
  }, []);

  return (
    <>
      <Header />

      <StrictMode>
        <div ref={sectionWrapper} className="section-wrapper">
          <Section name={"projects"} view={<Projects />} />
          {/* <Section name={"experiences"} /> */}
          <Section name={"about"} view={<About />} />
          <Section  />
        </div>
        <div ref={scrollDiv} className="scroll"></div>
      </StrictMode>

      <Footer />
    </>
  );
}

export default App;
