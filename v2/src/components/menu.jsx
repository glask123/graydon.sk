import React from "react";
import "../App.css";

function menu() {
  return (
    <div className="menu">
      <button type="button" className="buttonClass">
        Software
      </button>
      <button type="button" className="buttonClass">
        Rocketry
      </button>
      <button type="button" className="buttonClass">
        Music
      </button>
      <button type="button" className="buttonClass">
        Design
      </button>
      <button type="button" className="buttonClass">
        Photo/Video
      </button>
      <button type="button" className="buttonClass">
        Stagecraft
      </button>
    </div>
  );
}

export default menu;
