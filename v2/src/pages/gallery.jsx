import React, { useState } from "react";
import { Link } from "react-router-dom";

import Warnock from "../assets/warnock.jpeg";

export default function Gallery() {
  return (
    <div>
      <div className="gallerynav">
        <Link to="/">
          <div className="x">X</div>
        </Link>
      </div>
      <div className="imagediv">
        <img src={Warnock} alt="Failed to fetch image" className="images"></img>
        <img src={Warnock} alt="Failed to fetch image" className="images"></img>
        <img src={Warnock} alt="Failed to fetch image" className="images"></img>
        <img src={Warnock} alt="Failed to fetch image" className="images"></img>
        <img src={Warnock} alt="Failed to fetch image" className="images"></img>
        <img src={Warnock} alt="Failed to fetch image" className="images"></img>
      </div>
    </div>
  );
}
