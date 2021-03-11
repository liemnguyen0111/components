import React, { useRef } from "react";
// import espace from 
const SCard = (props) => {
  const techList = useRef();

  return (
    <div className="small-card-wrapper flex-col " data-index={props.index} >
      <div className="small-card glass-background ">
        <div className="small-card-header flex-row a-center ">
          <h2 className="flex-span">{props.info.name}</h2>

          <div className="links">
            <ul className="no-style no-padding no-margin flex-row">
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
          </div>
        </div>

        <div className="small-card-details">
          <img className="small-card-image" src={props.info.image} alt="" />

          <div className="small-card-description">{props.info.description}</div>
        </div>

        <div className="tech-used">
          <h4 className="tech-title">Technologies used</h4>
          <ul
            ref={techList}
            className={`flex-row no-style no-margin no-padding`}
          >
            <div className="list-1 ">
              {props.info.techUsed.map((v,i) => (
                <li className="logo-brand" key={i}>{v}</li>
              ))}
            </div>
            <div className="list-2 ">
              {props.info.techUsed.map((v,i) => (
                <li className="logo-brand" key={i}>{v}</li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SCard;
