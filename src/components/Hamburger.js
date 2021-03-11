import React, { useEffect, useRef } from "react";
import useWindowSize from "../myCustom/useWindowSize";
const Hamburger = ({ classes, scale, onClick }) => {
  const container = useRef();
  const line1 = useRef();
  const line3 = useRef();
  const size = useWindowSize();
  const toggle = (elem) => {
    let opposite = container.current.clientHeight;
    let adjacent = container.current.clientWidth;
    // let hypotenuse = Math.hypot(opposite , adjacent)
    let angle = (Math.atan2(opposite, adjacent) * 180) / Math.PI;
    line1.current.style.setProperty("--tf-line1", `rotate(${angle}deg) `);
    line3.current.style.setProperty("--tf-line3", `rotate(-${angle}deg) `);
    // let toggle = elem.target.classList.toggle("toggle");
    let toggle = document.body.classList.toggle("toggle");

    line1.current.classList.toggle("line-1-ani1", !toggle);
    line3.current.classList.toggle("line-3-ani1", !toggle);
    line1.current.classList.toggle("line-1-ani2", toggle);
    line3.current.classList.toggle("line-3-ani2", toggle);
  };

  useEffect(() => {
    if (size.width > 600) {
      document.body.classList.toggle("toggle", false);
    }
  }, [size.width]);

  return (
    <div
      className="bs-hamburger-menu br-pc-10"
      onClick={toggle}
      ref={container}
    >
      <div className="line-1  background-white " ref={line1} />
      <div className="line-2  background-white " />
      <div className="line-3  background-white " ref={line3} />
    </div>
  );
};

export default Hamburger;
