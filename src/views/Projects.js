import React, { useRef, useState } from "react";
import FCard from "../components/FCard";
import SCard from "../components/SCard";
import "../assets/svg-style/svg.css";
import { ReactComponent as ChatBox } from "../assets/images/chatbox.svg";
import { ReactComponent as CacheP } from "../assets/images/cache-1.svg";
import { ReactComponent as ReactBrand } from "../assets/images/reactBrand.svg";
import { ReactComponent as NodeBrand } from "../assets/images/nodeBrand.svg";
import { ReactComponent as ExpressBrand } from "../assets/images/expressBrand.svg";
import { ReactComponent as MongoBrand } from "../assets/images/mongoBrand.svg";
import espace from "../assets/images/espace.png";
import notfacebook from "../assets/images/notfacebook.png";
import workouttracker from "../assets/images/workouttracker.png";
import budgettracker from "../assets/images/budgettracker.png";

import IntersectionObs from "../myCustom/intersectionObserver";


const fProjects = [
  {
    name: "ChatBox",
    description:
      "An online chat application allow users to connect together with real-time data usage with many more upcoming features coming soon.",
    linkToProject: "https://chat-box-418166.herokuapp.com/",
    linkToGitHub: "https://github.com/liemnguyen0111/messenger",
    svg: ChatBox,
    techUsed: [MongoBrand, ExpressBrand, ReactBrand, NodeBrand],
  },
  {
    name: "CACHE",
    description:
      "An online sales, auction, and bartering app. It combines the Auction and Buy-it-Now features of eBay, along with the open offer features of Craigslist. CACHE takes the most powerful features of traditional auction and classified websites and puts them together in a modern and elegant interface that makes it easy for buyers and sellers to connect and transact",
    linkToProject: "https://uci-cache.herokuapp.com/",
    linkToGitHub: "https://github.com/liemnguyen0111/Project3",
    svg: CacheP,
    techUsed: [MongoBrand, ExpressBrand, ReactBrand, NodeBrand],
  },
];

const sProjects = [
  {
    name: "ESPACE",
    description:
      "Space is always expanding, so our knowledge keeps growing with it. Have fun on this site because there is always more to learn about our universe!",
    linkToProject: "https://liemnguyen0111.github.io/eSPACE/index.html",
    linkToGitHub: "https://github.com/liemnguyen0111/eSPACE",
    image: espace,
    techUsed: ["HTML", "CSS", "JavaScript", "REST-API"],
  },
  {
    name: "NotFaceBook",
    description:
      "This app allows to post/delete a post. Your Posts are only visible to your friends. Leave Real-time comments under posts.",
    linkToProject: "http://n0tfacebook.herokuapp.com/",
    linkToGitHub: "https://github.com/liemnguyen0111/n0tfacebook",
    image: notfacebook,
    techUsed: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL"],
  },
  {
    name: "Workout Tracker",
    description:
      "Allow user to view, create and track daily workouts. Log multiple exercises in a workout on a given day and track distance traveled.",
    linkToProject: "https://w0rk0uttracker.herokuapp.com/",
    linkToGitHub: "https://github.com/liemnguyen0111/fitnesstracker",
    image: workouttracker,
    techUsed: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
  },
  {
    name: "Budget Tracker",
    description:
      "This progressive web application will allow users to add expenses and deposits to their budget with or without a connection.",
    linkToProject: "https://arcane-scrubland-11947.herokuapp.com/",
    linkToGitHub: "https://github.com/liemnguyen0111/Budget-Trackers",
    image: budgettracker,
    techUsed: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
  },
];
const Projects = (props) => {
  const slider = useRef();
  // const size = useWindowSize();
  const [data, setData] = useState(0);

  // Listen to small cards x-scroll and update the current
  // section on view.
  IntersectionObs(".small-card-wrapper", setData);

  return (
    <div className={`projects-view`}>
      <div className="big-card-container featured-projects">
        <div className="sub-title featured flex-row j-center">
          <h3>Featured</h3>
        </div>
        {fProjects.map((v, i) => (
         <FCard info={v} index={i} key={i}/>
           
          ))}
      </div>
      <div className="all-other-projects flex-col">
        <div className="sub-title flex-row j-center">
          <h3>Other Noteworthy Projects</h3>
        </div>
        <div ref={slider} className="small-card-container scroll-bar">
          {sProjects.map((v, i) => (
           <SCard info={v} index={i} key={i}/>
          ))}
        </div>
        <div className="dot-wrapper max-600 flex-row a-center j-center">
          {sProjects.map((v, i) => (
            <div
              className={`dot  ${parseInt(data) === i ? "dot-active" : ""}` } key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
