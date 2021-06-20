import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";

export default function Submitted() {
  return (
    <div
      style={{
        backgroundColor: "#1A1A1A",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FadeIn>
        <div
          style={{
            width: "400px",
            height: "250px",
            textAlign: "center",
            color: "white",
            fontFamily: "Poppins",
            fontSize: "17px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          Thank you for contacting me, and I will get back to you as soon as
          possible. You can return to the home page by clicking the button
          below.
          <Link to="/">
            <button
              type="button"
              className="sub"
              style={{ marginTop: "-40px" }}
            >
              HOME
            </button>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
