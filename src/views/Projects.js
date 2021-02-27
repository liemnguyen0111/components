import React, { useRef, useState, useEffect } from "react";
import BCard from "../components/BCard";
import FCard from "../components/FCard";
import SCard from "../components/SCard";
import "../assets/svg-style/svg.css";
import { ReactComponent as ChatBox } from "../assets/images/chatbox.svg";
import { ReactComponent as CacheP } from "../assets/images/cache-1.svg";
import { ReactComponent as ReactBrand } from "../assets/images/reactBrand.svg";
import { ReactComponent as NodeBrand } from "../assets/images/nodeBrand.svg";
import { ReactComponent as ExpressBrand } from "../assets/images/expressBrand.svg";
import { ReactComponent as MongoBrand } from "../assets/images/mongoBrand.svg";

const Projects = (props) => {
  const slider = useRef();

  return (
    <div className={`projects-view`}>
      <div className="big-card-container featured-projects">
        <BCard
          svg={<ChatBox />}
          reactBrand={<ReactBrand />}
          nodeBrand={<NodeBrand />}
          expressBrand={<ExpressBrand />}
          mongoBrand={<MongoBrand />}
        />
        <BCard
          svg={<CacheP />}
          reactBrand={<ReactBrand />}
          nodeBrand={<NodeBrand />}
          expressBrand={<ExpressBrand />}
          mongoBrand={<MongoBrand />}
        />

        <FCard
          svg={<CacheP />}
          reactBrand={<ReactBrand />}
          nodeBrand={<NodeBrand />}
          expressBrand={<ExpressBrand />}
          mongoBrand={<MongoBrand />}
        />
      </div>
      <div className="all-other-projects flex-col">
        <h3 className="j-center">Other Noteworthy Projects</h3>
        <div ref={slider} className="small-card-container">
          <SCard svg={<CacheP />} />
          <SCard svg={<CacheP />} />
          <SCard svg={<CacheP />} />
        </div>
        <div className="dot-wrapper flex-row a-center j-center">
          <div className="dot dot-active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
