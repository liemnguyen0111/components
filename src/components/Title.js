import React from "react";

const Title = (props) => {
  return <h1 className={`${props.class}`}>{props.title.toUpperCase()}</h1>;
};

export default Title