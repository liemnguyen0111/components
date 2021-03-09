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

import IntersectionObs from "../myCustom/intersectionObserver";
import useWindowSize from "../myCustom/useWindowSize";

const Projects = (props) => {
  const slider = useRef();
  const size = useWindowSize();
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

        <FCard
          svg={<ChatBox />}
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
        <div className="sub-title flex-row j-center">
          <h3>Other Noteworthy Projects</h3>
        </div>
        <div ref={slider} className="small-card-container">
          <SCard png={espace} index={0} target={data} />
          <SCard png={espace} index={1} target={data} />
          <SCard png={espace} index={2} target={data} />
        </div>
        <div className="dot-wrapper max-600 flex-row a-center j-center">
          <div className={`dot  ${data === "0" ? "dot-active" : ""}`}></div>
          <div className={`dot  ${data === "1" ? "dot-active" : ""}`}></div>
          <div className={`dot  ${data === "2" ? "dot-active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
