import React from "react";
import Header from "./itemHeader";
var Scroll = require("react-scroll");
var Element = Scroll.Element;

function item(props) {
  return (
    <Element name={props.section}>
      <div className="item">
        <Header section={props.section} image={props.image} />
        <div className="content">{props.children}</div>
      </div>
    </Element>
  );
}

export default item;
