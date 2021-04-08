import React from "react";

export default function Tag(props) {
  return (
    <div
      style={{
        padding: "4px",
        backgroundColor: "#3d3d3d",
        borderRadius: "5px",
        color: "#cccccc",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "10px",
        width: "fit-content",
        margin: "2px",
        cursor: "pointer",
        lineHeight: "13px",
      }}
    >
      {props.tag}
    </div>
  );
}
