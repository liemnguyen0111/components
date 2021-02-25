import React, { Component } from "react";
import BCard from '../components/BCard'
import '../assets/svg-style/svg.css'
import { ReactComponent  as ChatBox } from '../assets/images/chatbox.svg'
import { ReactComponent  as CacheP } from '../assets/images/cache-1.svg'
import { ReactComponent  as ReactBrand } from '../assets/images/reactBrand.svg'
import { ReactComponent  as NodeBrand } from '../assets/images/nodeBrand.svg'
import { ReactComponent  as ExpressBrand } from '../assets/images/expressBrand.svg'
import { ReactComponent  as MongoBrand } from '../assets/images/mongoBrand.svg'

export default class Projects extends Component {
  render() {
    return (
      <div
      className={`projects-view`}
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   maxWidth: "calc(100% - 50px)",
        //   minWidth: "20rem",
        //   margin: "auto",
        // }}
      >
      <div className="featured-projects">
      <BCard svg={<ChatBox/>} reactBrand={<ReactBrand/>} nodeBrand={<NodeBrand/>}  expressBrand={<ExpressBrand/>} mongoBrand={<MongoBrand/>}/>
      <BCard svg={<CacheP/>} reactBrand={<ReactBrand/>} nodeBrand={<NodeBrand/>}  expressBrand={<ExpressBrand/>} mongoBrand={<MongoBrand/>}/>
      </div>
      <div className="all-other-projects">

      </div>
        {/* <CacheP/>
        <ChatBox/> */}
        {/* {this.props.SVG} */}
      </div>
    );
  }
}
