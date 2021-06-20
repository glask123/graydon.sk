import React from "react";
import "../App.css";
import Logo from "./logo";
import Menu from "./menu";
import Socials from "./socials";

function menuBar() {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <Socials />
    </div>
  );
}

export default menuBar;
