import React, { Component } from "react";
import Navigation from "../../components/Navigation";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);

    return () => window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    this.setState({ y: window.scrollY });
  };

  render() {
    return (
      <header className={this.state.y > 70 ? "gray-background" : ""}>
        <Navigation section={this.props.section} />
      </header>
    );
  }
}
