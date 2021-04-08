import React from "react";
import Tag from "./tag";
import FadeIn from "react-fade-in";

export default function NewProject(props) {
  if (props.left) {
    return (
      <FadeIn className="project-wrapper">
        <img
          src={props.img}
          alt={props.name}
          style={{
            width: "230px",
            height: "150px",
            objectFit: "cover",
            border: "3px solid black",
            boxShadow: "-8px 8px 0 -2px #1a1a1a, -8px 8px 0 0 #fff",
            imageRendering: "auto",
            marginRight: "5px",
          }}
        />
        <div style={{ width: "230px", marginLeft: "5px" }}>
          <a
            href={props.link}
            style={{
              textDecoration: "none",
              color: "white",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "14px",
                marginBottom: "-2px",
              }}
              className="projecttitle"
            >
              {props.name} [{props.type}]
            </h3>
          </a>
          <h5
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: "300",
              fontStyle: "italic",
              marginBottom: "-1px",
              fontSize: "13px",
            }}
          >
            {props.date}
          </h5>
          <p
            style={{
              textAlign: "left",
              fontFamily: "Poppins",
              fontWeight: "200",
              fontSize: "12px",
            }}
          >
            {props.body}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {props.tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
        </div>
      </FadeIn>
    );
  } else {
    return (
      <FadeIn className="project-wrapper">
        <div style={{ width: "230px", marginRight: "5px" }}>
          <a
            href={props.link}
            style={{
              textDecoration: "none",
              color: "white",
              textAlign: "right",
            }}
          >
            <h3
              style={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "14px",
                marginBottom: "-2px",
              }}
              className="projecttitle"
            >
              {props.name} [{props.type}]
            </h3>
          </a>
          <h5
            style={{
              textAlign: "right",
              fontFamily: "Poppins",
              fontWeight: "300",
              fontStyle: "italic",
              marginBottom: "-1px",
              fontSize: "13px",
            }}
          >
            {props.date}
          </h5>
          <p
            style={{
              textAlign: "right",
              fontFamily: "Poppins",
              fontWeight: "200",
              fontSize: "12px",
            }}
          >
            {props.body}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {props.tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
        </div>
        <img
          src={props.img}
          alt={props.name}
          style={{
            width: "230px",
            height: "150px",
            objectFit: "cover",
            border: "3px solid black",
            marginLeft: "5px",
            boxShadow: "8px 8px 0 -2px #1a1a1a, 8px 8px 0 0 #fff",
          }}
        />
      </FadeIn>
    );
  }
}
