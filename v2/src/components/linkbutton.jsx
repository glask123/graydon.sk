import React from "react";

export default function linkButton(props) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 15,
      }}
    >
      <button className="linkButton">{props.name}</button>
    </div>
  );
}
