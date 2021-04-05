import "../App.css";
import MenuBar from "../components/menubar";
import Body from "../components/body";
import FadeIn from "react-fade-in";
import Photo from "../assets/personal.jpg";
var Scroll = require("react-scroll");
var scroll = Scroll.animateScroll;

export default function main() {
  return (
    <div style={{ backgroundColor: "#1A1A1A", minHeight: "100vh" }}>
      <MenuBar />
      <FadeIn>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "40px",
            width: "40%",
            height: "300px",
            border: "1px solid white",
          }}
        >
          <div style={{ width: "50%", height: "100%" }}>
            <h1>I'm Graydon Schulze-Kalt,</h1>
            <p>
              A highschool student in Los Angeles attending Harvard-Westlake.
              I'm interested in coding, aerospace, music, and more. <br />{" "}
              <br /> Scroll down or click any of the buttons above to get
              started.
            </p>
          </div>
        </div>
        <Body />
      </FadeIn>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "5%",
          bottom: 0,
          backgroundColor: "#1A1A1A",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100%",
            height: "100%",
            width: "100%",
            backgroundImage:
              "linear-gradient(to top, rgba(26,26,26,1), rgba(26,26,26,0))",
          }}
        ></div>
        <h3
          style={{
            position: "absolute",
            fontSize: 10,
            right: 20,
            bottom: 15,
            color: "white",
            fontFamily: "Poppins",
            fontWeight: 200,
          }}
        >
          © Graydon Schulze-Kalt 2020
        </h3>
        <div className="arrow" onClick={scroll.scrollToTop}>
          ^
        </div>
      </div>
    </div>
  );
}
