import React, { useState, useRef, useEffect, StrictMode } from "react";
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";
import Section from "./views/shared/Section";
import Home from "./views/Home";
import Projects from "./views/Projects";
import About from "./views/About";
import Contact from "./views/Contact";
import skewScrolling from "./myCustom/skewScrolling";
import "./styles/index";
import useWindowSize from "./myCustom/useWindowSize";

function App() {

  const sectionWrapper = useRef();
  const scrollDiv = useRef();
  const [sectionHeight, setSectionHeight] = useState();
  const size = useWindowSize();
  const skew = skewScrolling;

  useEffect(() => {
    const height = sectionWrapper.current.scrollHeight;
    setSectionHeight(height)
    scrollDiv.current.style.setProperty("height", `${height}px`);

  }, [size.width,sectionHeight]);


  useEffect(() => {
    requestAnimationFrame(() => skew(sectionWrapper.current, size));
  }, []);


  return (
    <>  
      <Header section={sectionWrapper}/>
   
      <StrictMode>
        <div ref={sectionWrapper} className="section-wrapper"
        onAnimationStartCapture={() => {
          const height = sectionWrapper.current.scrollHeight;
          setSectionHeight(height)
        }}>
          <Section showName={false} name={"home"} class={"home"}  view={<Home section={sectionWrapper}/>} />
          <Section showName={true} name={"projects"} class={"projects"}  view={<Projects />} />
          {/* <Section name={"experiences"} /> */}
          <Section  showName={true} name={"about"} class={"about"}  view={<About />} />
          <Section showName={false} name={"contact"} class={"contact"} view={<Contact />} />
        </div>

        <div ref={scrollDiv} className="scroll"></div>
      </StrictMode>
      <Footer />
 
    </>
  );
}

export default App;
