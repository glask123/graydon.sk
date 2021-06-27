import React from "react";
import Video from "../components/video";

export default function Stream() {
  return (
    <div className="streambody">
      <div className="streamcontainer">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}
