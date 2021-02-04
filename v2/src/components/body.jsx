import React from "react";
import Item from "./item";
import SoftwareImage from "../assets/software@2x.png";

function body() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px",
        border: "1px solid white",
      }}
    >
      <Item section="Software" image={SoftwareImage} />
    </div>
  );
}

export default body;
