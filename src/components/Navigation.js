import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Logo from './Logo'
import Utils from '../myCustom/index.js'

const { upperFirst, joinWithHyphen } = Utils

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.active = React.createRef();
  }

  onClick = (event) => {
    this.active = event.target;
  };

  init = (event) => {
    if (window.location.hash.substring(1) === event.dataset.link) {
      this.active = event;
    }
  };

  render() {
    const list = ["projects", "about", "contact", 'resume'];
    return (
      <Router>
        <nav>
          <Logo/>
          <ul className="links">
          {list.map((val, index) => (
            <NavLink
              key={index}
              to={{ pathname: "/", hash: `#${joinWithHyphen(val)}` }}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              activeClassName="selected"
              data-link={`${val}`}
              onClick={this.onClick}
              ref={this.init}
              className={`${val}`}
            >
              {upperFirst(val)}
            </NavLink>
          ))}
          </ul>
        
        </nav>
      </Router>
    );
  }
}
