import React from "react";
import "../assets/svg-style/svg.css";

const FCard = (props) => {
  return (
    <div className="f-card-wrapper glass-background">
      {/* Featured card - flex column*/}
      <div className="f-card flex-col ">
        {/* Row 1 - flex row - project title and links*/}
        <div className="f-card-row-1 flex-row">
          {/* Title */}
          <h2 className="project-title flex-span">{props.info.name}</h2>
          {/* Flex row - Links to project */}
          {/* <div className="links flex-row" > */}
          <ul className="links flex-row no-style no-margin a-center">
            <li>
              <a
                className="no-style"
                href={props.info.linkToGitHub}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                className="no-style"
                href={props.info.linkToProject}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
          </ul>
          {/* </div> */}
        </div>
        {/* Row 2 - flex row - Card details*/}
        <div className="f-card-row-2 flex-row j-center">
          <div className="f-card-info flex-col a-center j-center">
            <div className="f-card-description flex-col">
              <p>{props.info.description}</p>
            </div>
          </div>
          <div className="f-card-image">{<props.info.svg />}</div>
        </div>
        {/* Row 3 - flex row - Tech used */}
        <div className="f-card-row-3">
          <h4 className="tech-title">Technologies used</h4>
          <ul className={`flex-row no-style no-margin no-padding`}>
            {props.info.techUsed.map((SVG, i) => (
              <li className="logo-brand" key={i}>{<SVG></SVG>}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FCard;
