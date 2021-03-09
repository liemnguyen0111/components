import React, { useState, useEffect, useRef } from "react";

const SCard = (props) => {
  const techList = useRef();



  return (
    <div
      className="small-card-wrapper flex-col " data-index={props.index}>
      <div className="small-card glass-background ">
        <div className="small-card-header flex-row a-center ">
          <h2 className="flex-span">ESPACE</h2>

          <div className="links">
            <ul className="no-style no-padding no-margin flex-row">
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

        <div className="small-card-details">
          <img className="small-card-image" src={props.png} alt=""/>
          {/* <div className="small-card-image">{props.svg}</div> */}
          <div className="small-card-description">
            Space is always expanding, so our knowledge keeps growing with it.
            Have fun on this site because there is always more to learn about
            our universe!
          </div>
        </div>

        <div className="tech-used">
          <h4 className="tech-title">Technologies used</h4>
          <ul
            ref={techList}
            className={`flex-row no-style no-margin no-padding`}
          >
            <div className="list-1 ">
              <li className="logo-brand">REST API</li>
              <li className="logo-brand">HTML5</li>
              <li className="logo-brand">ES6</li>
              <li className="logo-brand">CSS3</li>
            </div>
            <div className="list-2 ">
              <li className="logo-brand">REST API</li>
              <li className="logo-brand">HTML5</li>
              <li className="logo-brand">ES6</li>
              <li className="logo-brand">CSS3</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SCard;
