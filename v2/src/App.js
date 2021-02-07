import "./App.css";
import MenuBar from "./components/menubar";
import Body from "./components/body";
import { ReactComponent as Arrow } from "./assets/arrow.svg";

function App() {
  return (
    <div style={{ backgroundColor: "#1A1A1A", minHeight: "100vh" }}>
      <MenuBar />
      <Body />
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
        <Arrow className="arrow" />
      </div>
    </div>
  );
}

export default App;
