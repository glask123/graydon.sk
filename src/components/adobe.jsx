import "../App.css";
import React from "react";

export default function Adobe(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        borderColor: props.bordercolor,
        borderWidth: 4,
        borderStyle: "solid",
        borderRadius: 20,
        width: 80,
        height: 80,
        color: props.bordercolor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 45,
        margin: 5,
      }}
      className="adobe"
    >
      {props.program}
      <p
        style={{
          fontSize: 11,
          fontFamily: "Poppins",
          fontStyle: "italic",
          fontWeight: "200",
          margin: -8,
        }}
      >
        {props.level}
      </p>
    </div>
  );
}
