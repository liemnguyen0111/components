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
          <h2 className="project-title flex-span">ChatBox</h2>
          {/* Flex row - Links to project */}
          {/* <div className="links flex-row" > */}
          <ul className="links flex-row no-style no-margin a-center">
            <li>
              <a className="no-style" href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a className="no-style" href="#">
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
              <p>
                An online sales, auction, and bartering app. It combines the
                Auction and Buy-it-Now features of eBay, along with the open
                offer features of Craigslist. CACHE takes the most powerful
                features of traditional auction and classified websites and puts
                them together in a modern and elegant interface that makes it
                easy for buyers and sellers to connect and transact.
              </p>
            </div>
          </div>
          <div className="f-card-image">{props.svg}</div>
        </div>
        {/* Row 3 - flex row - Tech used */}
        <div className="f-card-row-3">
          <h4 className="tech-title">Technologies used</h4>
          <ul className={`flex-row no-style no-margin no-padding`}>
            <li className="logo-brand">{props.mongoBrand}</li>
            <li className="logo-brand">{props.expressBrand}</li>
            <li className="logo-brand">{props.reactBrand}</li>
            <li className="logo-brand">{props.nodeBrand}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FCard;
