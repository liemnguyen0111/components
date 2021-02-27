import React, { useState, useEffect } from "react";
const utils = {
  // Upper first letter and return a new string
  upperFirst: (string) =>
    string
      .split(" ")
      .map((v) => v[0].toUpperCase() + v.substring(1))
      .join(" "),

  // Join string with hyphen
  joinWithHyphen: (string) => string.split(" ").join("-"),

  // Listen to window resize
  // useWindowSize: () => {
  //   const getSize = () => {
  //     return {
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     };
  //   };

  //   const [windowSize, setWindowSize] = useState(getSize);

  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowSize(getSize());
  //     }

  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   return windowSize;
  // },

  // Computed element height
  getElmHeight : (node) => {
    const list = [
      'margin-top',
      'margin-bottom',
      'border-top',
      'border-bottom',
      'padding-top',
      'padding-bottom',
      'height'
  ]

  const style = window.getComputedStyle(node)
  return list
      .map(k => parseInt(style.getPropertyValue(k), 10))
      .reduce((prev, cur) => prev + cur)
  }
};

export default utils;
