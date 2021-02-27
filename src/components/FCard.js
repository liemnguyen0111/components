import React, { useState, useRef, useEffect } from "react";
import Utils from "../myCustom/index";
import useWindowSize from '../myCustom/useWindowSize'
import "../assets/svg-style/svg.css";

// const { getElmHeight } = Utils;

const FCard = (props) => {
//   const size = useWindowSize();
//   const cardInfo = useRef();
//   const desContainer = useRef();
//   const des = useRef();
//   const [upDown, setUpDown] = useState("chev-down");

//   useEffect(() => {
//     const elemHeight = getElmHeight(des.current);
//     desContainer.current.style.setProperty("--bcdHeight", `${elemHeight}px`);

//     cardInfo.current.style.setProperty("--cardInfoTrans", "none");
//   }, [size.width]);


//   const onClick = () => {
//     desContainer.current.classList.toggle("height-shrink");
//     cardInfo.current.style.setProperty("--cardInfoTrans", ".5s ease-in-out");
//     setUpDown(upDown === "chev-up" ? "chev-down" : "chev-up");
//   };

  return (
    <div className="f-card-wrapper">
        <div className="f-card"></div>
    </div>
  );
};

export default FCard;
