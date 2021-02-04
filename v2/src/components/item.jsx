import React from "react";
import Header from "./itemHeader";

function item(props) {
  return (
    <div className="item">
      <Header section={props.section} image={props.image} />
    </div>
  );
}

export default item;
