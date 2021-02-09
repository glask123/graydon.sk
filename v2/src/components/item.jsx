import React from "react";
import Header from "./itemHeader";
import Button from "./linkbutton";
var Scroll = require("react-scroll");
var Element = Scroll.Element;

function item(props) {
  return (
    <Element name={props.section}>
      <div className="item">
        <Header section={props.section} image={props.image} />
        <div className="content">{props.children}</div>
        <Button name={props.name} link={props.link} />
      </div>
    </Element>
  );
}

export default item;
