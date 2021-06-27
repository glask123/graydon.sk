import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function menu() {
  return (
    <div className="menu">
      <ScrollLink to="Software" spy={true} smooth={true} offset={-10}>
        <button type="button" className="buttonClass">
          Software
        </button>
      </ScrollLink>

      <ScrollLink to="Rocketry" spy={true} smooth={true} offset={-10}>
        <button type="button" className="buttonClass">
          Rocketry
        </button>
      </ScrollLink>

      <ScrollLink to="Music" spy={true} smooth={true} offset={-10}>
        <button type="button" className="buttonClass">
          Music
        </button>
      </ScrollLink>

      <ScrollLink to="Design" spy={true} smooth={true} offset={-10}>
        <button type="button" className="buttonClass">
          Design
        </button>
      </ScrollLink>

      <ScrollLink to="Photo/Video" spy={true} smooth={true} offset={-10}>
        <button type="button" className="buttonClass">
          Photo/Video
        </button>
      </ScrollLink>

      <ScrollLink to="Stagecraft" spy={true} smooth={true} offset={-10}>
        <button type="button" className="buttonClass">
          Stagecraft
        </button>
      </ScrollLink>

      <Link to="/contact">
        <button type="button" className="buttonClass">
          Contact
        </button>
      </Link>
    </div>
  );
}

export default menu;
