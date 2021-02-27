import React, { Component } from "react";
import Title from "../../components/Title";

export default class Section extends Component {
  //  rellaxRef = useRef();
  constructor(props) {
    super(props);
    this.state = {};

  }

  componentDidMount() {
    if (this.$ref && window.location.href.includes(`#${this.props.name}`)) {
      this.$ref.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  render() {
    return (
      <section
        ref={(ref) => {
          this.$ref = ref;
        }}
        className={`${this.props.class}`}
        id={this.props.name}
      >
        <Title
          title={this.props.name}
          class={`section-title max-width-1600 margin-tb-50`}
        />
     
        {this.props.view}
    
   

        {/* <div style={{display : 'flex', justifyContent: 'center', alignItems: 'center', maxWidth : 'calc(100% - 50px)', minWidth : '20rem', margin : 'auto'}}>
  
        {this.props.SVG}
        </div> */}
        {/* <img src={this.props.image} alt="" srcset="" style={{display : 'flex', justifyContent: 'center', alignItems: 'center', maxWidth : 'calc(100% - 50px)', minWidth : '20rem', margin : 'auto'}}/> */}
        {/* {this.props.name} */}
      </section>
    );
  }
}
