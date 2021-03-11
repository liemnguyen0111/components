import React, { Component } from "react";
import Title from "../../components/Title";

export default class Section extends Component {

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
        {this.props.showName ? (
          <Title
            title={this.props.name}
            class={`section-title  margin-tb-50`}
          />
        ) : (
          ""
        )}

        <div className="view">{this.props.view}</div>
      </section>
    );
  }
}
