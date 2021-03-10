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
  const [sectionHeight, setSectionHeight] = useState();
  const size = useWindowSize();
  const skew = skewScrolling;

  useEffect(() => {
    const height = sectionWrapper.current.scrollHeight;
    setSectionHeight(height)
    scrollDiv.current.style.setProperty("height", `${height}px`);
    // console.log(endOfPage);
  }, [size.width,sectionHeight]);

  useEffect(() => {
    // document.addEventListener("scroll", onScroll());
    // return () => document.removeEventListener("scroll", onScroll());
    // const height = sectionWrapper.current.scrollHeight;
    // setSectionHeight(height)
  },[]);

  useEffect(() => {
    requestAnimationFrame(() => skew(sectionWrapper.current, size));
    // const height = sectionWrapper.current.scrollHeight;
    // setSectionHeight(height)
     document.addEventListener("transitionend", onScroll());
    return () => document.removeEventListener("transitionend", onScroll());
  }, []);

  const onScroll = () => {
    console.log("scroll");
  };
  return (
    <>  
      <Header />
   
      <StrictMode>
        <div ref={sectionWrapper} className="section-wrapper"
        onAnimationStartCapture={() => {
          const height = sectionWrapper.current.scrollHeight;
          setSectionHeight(height)
        }}>
          <Section view={<Home />} />
          <Section name={"projects"} view={<Projects />} />
          {/* <Section name={"experiences"} /> */}
          <Section name={"about"} view={<About />} />
          <Section class={"contact"} view={<Contact />} />
        </div>

        <div ref={scrollDiv} className="scroll"></div>
      </StrictMode>
      <Footer />
 
    </>
  );
}

export default App;
