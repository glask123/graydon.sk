import React from "react";

export default function Tag({ tag, desc }) {
  return (
    <div
      style={{
        padding: "7px",
        backgroundColor: "#3d3d3d",
        borderRadius: "5px",
        color: "#bbbbbb",
        fontFamily: "Poppins",
        fontWeight: "500",
        fontSize: "13px",
        width: "fit-content",
        margin: "4px",
        cursor: "pointer",
        lineHeight: "13px",
      }}
    >
      {tag}
      <p
        style={{
          fontStyle: "italic",
          fontSize: "10px",
          fontWeight: 200,
          color: "lightgray",
        }}
      >
        {desc}
      </p>
    </div>
  );
}
