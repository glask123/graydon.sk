import React from "react";

export default function Show(props) {
  if (props.bg == null) {
    return (
      <div
        className="show"
        style={{
          backgroundColor: "#303030",
          borderRadius: 8,
          padding: 8,
          marginBottom: 8,
          cursor: "pointer",
          minWidth: 250,
          boxSizing: "border-box",
          marginLeft: 4,
          marginRight: 4,
          flex: 1,
          position: "relative",
          height: 78,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 500, fontSize: 14, color: "#bbbbbb" }}>
          {props.name}
        </div>
        <div style={{ fontWeight: 400, fontSize: 13, color: "#bbbbbb" }}>
          {props.position}
        </div>
        <div style={{ fontWeight: 300, fontSize: 13, color: "#bbbbbb" }}>
          {props.company} – {props.year}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="show"
        style={{
          backgroundColor: "#303030",
          borderRadius: 8,
          padding: 8,
          marginBottom: 8,
          cursor: "pointer",
          minWidth: 250,
          boxSizing: "border-box",
          marginLeft: 4,
          marginRight: 4,
          flex: 1,
          position: "relative",
          overflow: "hidden",
          height: 78,
        }}
      >
        <img
          src={props.bg}
          style={{
            position: "absolute",
            margin: "-8px",
            borderRadius: 8,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "0",
            filter: "blur(2px) brightness(50%)",
            objectPosition: "0% 30%",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: 62,
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: 500,
              fontSize: 14,
              color: "#bbbbbb",
            }}
          >
            {props.name}
          </div>
          <div style={{ fontWeight: 400, fontSize: 13, color: "#bbbbbb" }}>
            {props.position}
          </div>
          <div style={{ fontWeight: 300, fontSize: 13, color: "#bbbbbb" }}>
            {props.company} – {props.year}
          </div>
        </div>
      </div>
    );
  }
}
