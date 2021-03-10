import React, { Component } from "react";
import myPhoto from "../assets/images/myPhoto.jpg";
import htmlBadge from "../assets/images/html.png";
import javascriptBadge from "../assets/images/javascript.png";
import nodeBadge from "../assets/images/node.png";
import databasesBadge from "../assets/images/databases.png";
import reactBadge from "../assets/images/react.png";

export default class About extends Component {
  render() {
    return (
      <div className="about-me-wrapper j-center">
        <div className="about-me flex-row">
          <div className="intro">
            <p>
              Hello! I'm
              <span className={`my-name`}> Tim</span>
              , a fullstack developer based in Orange, CA.
              <br />
              Specialize in the
              <span className="mern-txt">
                <span title="Mongo Database">
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    M{" "}
                  </a>
                </span>
                <span title="Express.js">
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    E{" "}
                  </a>
                </span>
                <span title="React.js">
                  {" "}
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    R{" "}
                  </a>
                </span>
                <span title="Node.js">
                  {" "}
                  <a
                    href="https://nodejs.org/en/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    N{" "}
                  </a>{" "}
                </span>
              </span>
              stack and strong ability to effectively design, maintain, and
              manage.
            </p>

            <p>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </p>

            <p>
              Shortly after graduating from{" "}
              <span className={`blue-txt`}>
                University of Irvine, California
              </span>{" "}
              coding bootcamp, I started to explore and getting deep more into
              what I've learned to advance my skills in development. I'm
              currently seeking for new opportunity where my skills can be fully
              ultilized.
            </p>

            <q className={`my-quote`}>
              <i>Problems are not problem, they are opportunity.</i>
            </q>
          </div>
          <div className="my-photo">
            <img src={myPhoto} alt="" />
          </div>
        </div>

        <div className="achivements flex-col ">
          <div className="sub-title flex-row j-center">
            <h3>Achievements</h3>
          </div>

          <ul className={`flex-row no-style no-padding`}>
            <li className="logo-brand">
              <img src={htmlBadge} alt="" />
            </li>
            <li className="logo-brand">
              <img src={javascriptBadge} alt="" />
            </li>
            <li className="logo-brand">
              <img src={reactBadge} alt="" />
            </li>
            <li className="logo-brand">
              <img src={nodeBadge} alt="" />
            </li>
            <li className="logo-brand">
              <img src={databasesBadge} alt="" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
