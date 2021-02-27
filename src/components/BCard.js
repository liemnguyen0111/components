import React, { useState, useRef, useEffect } from "react";
import Utils from "../myCustom/index";
import useWindowSize from '../myCustom/useWindowSize'
import "../assets/svg-style/svg.css";

const { getElmHeight } = Utils;

const BCard = (props) => {
  const size = useWindowSize();
  const cardInfo = useRef();
  const desContainer = useRef();
  const des = useRef();
  const [upDown, setUpDown] = useState("chev-down");

  useEffect(() => {
    const elemHeight = getElmHeight(des.current);
    desContainer.current.style.setProperty("--bcdHeight", `${elemHeight}px`);

    cardInfo.current.style.setProperty("--cardInfoTrans", "none");
  }, [size.width]);


  const onClick = () => {
    desContainer.current.classList.toggle("height-shrink");
    cardInfo.current.style.setProperty("--cardInfoTrans", ".5s ease-in-out");
    setUpDown(upDown === "chev-up" ? "chev-down" : "chev-up");
  };

  return (
    <div className="project-b-card flex-col j-center auora-background">
      <div className="item-wrapper flex-wrap">
        <div
          className="b-card-info flex-col card-item-size text-align-left"
          ref={cardInfo}
          data-aos="zoom-out-left"
        >
          <div className="b-card-title flex-row a-center">
            <h2 className="flex-span " >Chatbox</h2>

            <div className="links" >
              <ul className="no-style no-padding no-margin flex-row" >
                <li>
                  <a className="no-style" href="#">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a className="no-style" href="#">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="b-card-description height-shrink" ref={desContainer}>
            <h4 className={`font-400 `} ref={des}>
              An online sales, auction, and bartering app. It combines the
              Auction and Buy-it-Now features of eBay, along with the open offer
              features of Craigslist. CACHE takes the most powerful features of
              traditional auction and classified websites and puts them together
              in a modern and elegant interface that makes it easy for buyers
              and sellers to connect and transact.
            </h4>
          </div>
          <div
            className="view-more-less no-margin flex-row a-center clickable"
            onClick={onClick}
          >
            <i className={`fas fa-chevron-down ${upDown}`} />
            <span>
              <h6 className="no-margin">
                {upDown === "chev-up" ? " Read Less" : "View Project Details"}
              </h6>
            </span>
          </div>
        </div>

        <div className="b-card-image card-item-size" data-aos="zoom-out-right">{props.svg}</div>
      </div>

      <div className="tech-used">
        <h4 className="tech-title">Technologies used</h4>
        <ul className={`flex-row no-style no-margin no-padding`}>
          <li className="logo-brand">{props.mongoBrand}</li>
          <li className="logo-brand">{props.expressBrand}</li>
          <li className="logo-brand">{props.reactBrand}</li>
          <li className="logo-brand">{props.nodeBrand}</li>
        </ul>
      </div>
    </div>
  );
};

export default BCard;
