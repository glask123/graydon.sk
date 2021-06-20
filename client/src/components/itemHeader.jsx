import React from "react";

function itemHeader(props) {
  return (
    <div className="itemHeader">
      <img src={props.image} alt="newImg" className="img" />
      <h2 className="headTitle">{props.section}</h2>
      <div className="horizontal">
        <div className="vertical"></div>
      </div>
    </div>
  );
}

export default itemHeader;
