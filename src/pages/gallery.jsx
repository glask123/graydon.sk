import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div>
      <div className="gallerynav">
        <Link to="/">
          <div className="x">X</div>
        </Link>
      </div>
      <div className="imagediv"></div>
    </div>
  );
}
