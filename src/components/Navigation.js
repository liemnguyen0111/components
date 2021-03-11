import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import scrollIntoView from "../myCustom/scrollIntoView";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import resume from '../assets/files/resume.docx'
import Utils from "../myCustom/index.js";

const { upperFirst } = Utils;

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.active = React.createRef();
  }

  onClick = (event) => {
    this.active = event.target;
    document.body.classList.toggle("toggle");

    const section = this.props.section;
    scrollIntoView(section, this.active.dataset.link);

  };

  home = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  
  render() {
    const list = ["projects", "about", "contact"];
    return (
      <Router>
        <nav>
          <div onClick={this.home}>
            <Logo />
          </div>

          <ul className="nav-links">
            {list.map((val, index) => (
              <li
                key={index}
                data-link={`${val}`}
                onClick={this.onClick}
                className={`${val}`}
              >
                {upperFirst(val)}
              </li>
            ))}

            <li
              key={"resume"}
              data-link={`resume`}
              onClick={this.onClick}
              className={`resume`}
            >
              <a href={resume} download> {upperFirst("resume")}</a>
             
            </li>
          </ul>
          <div className="max-600">
            <Hamburger></Hamburger>
          </div>
        </nav>
      </Router>
    );
  }
}
