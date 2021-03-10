import React, { useEffect } from "react";
import { ReactComponent as TimNguyen } from "../assets/images/TimNguyen.svg";

const Home = () => {
  useEffect(() => {
    init();
  });

  const init = () => {
    let letter = document.querySelectorAll("#my-name path");
    // console.log(letter)
    letter.forEach((l, index) => {
      // console.log(l.getTotalLength())
      l.style.setProperty(`--nLength${++index}`, l.getTotalLength());
      l.style.setProperty(
        `animation`,
        `name-anim 3s ease forwards ${1 / index + 0.2}s`
      );
      let sec = (3 + 1 / index + 0.2) * 1000;
      setTimeout(() => {
        l.style.setProperty(`stroke-dasharray`, `0`);
      }, sec);
    });
  };

  // const onClick = () => {
  //   window.history.pushState({}, null, `/contact`);
  //   scrollIntoView("contact");
  // };

  return <div className="home flex-col a-center j-center">
    <p>Hello, my name is</p>
    <TimNguyen></TimNguyen>
    <p>I create things that live on the web.</p>
    <div className="view-my-project">View My Projects</div>
  </div>;
};

export default Home;
