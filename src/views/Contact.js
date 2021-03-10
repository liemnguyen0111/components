import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="get-in-touch">
        <p>Like what you see?</p>
        <p>Get In Touch</p>
        <p>
          I'm currently looking for new opportunity. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="say-hello">
          <a href="mailto: liemnguyen0111@gmail.com">Say Hello</a>
        </div>

        {/* <div className="line"></div> */}

        <div className="social-media flex-row a-center j-center">
          <a href="">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    );
  }
}
