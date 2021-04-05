import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={`links/${props.name}`}>
        <button className="linkButton">{props.name}</button>
      </Link>
    </div>
  );
}
