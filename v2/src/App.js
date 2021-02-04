import "./App.css";
import MenuBar from "./components/menubar";
import Body from "./components/body";

function App() {
  return (
    <div style={{ backgroundColor: "#1A1A1A", minHeight: "100vh" }}>
      <MenuBar />
      <Body />
    </div>
  );
}

export default App;
