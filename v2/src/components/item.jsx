import React from "react";
import Header from "./itemHeader";
import Button from "./linkbutton";

function item(props) {
  return (
    <div className="item">
      <Header section={props.section} image={props.image} />
      <div className="content">{props.children}</div>
      <Button name={props.name} link={props.link} />
    </div>
  );
}

export default item;
