import React from "react";
import { Link } from "react-router-dom";

export default function linkButton(props) {
  if (props.local) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <Link to={`/${props.name.toLowerCase()}`}>
          <button className="linkButton">{props.name}</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <a href={props.link}>
          <button className="linkButton">{props.name}</button>
        </a>
      </div>
    );
  }
}
