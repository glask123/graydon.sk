import "../App.css";
import MenuBar from "../components/menubar";
import Body from "../components/body";
import FadeIn from "react-fade-in";
var Scroll = require("react-scroll");
var scroll = Scroll.animateScroll;

export default function main() {
  return (
    <div style={{ backgroundColor: "#1A1A1A", minHeight: "100vh" }}>
      <MenuBar />
      <FadeIn>
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
