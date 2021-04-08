import React, { useState } from "react";

export default function SliderMenu(props) {
  const [current, setCurrent] = useState("one");
  const [colors, setColors] = useState({
    one: ["white", "#1f1f1f"],
    two: ["grey", "#1a1a1a"],
    three: ["grey", "#1a1a1a"],
    four: ["grey", "#1a1a1a"],
    L1: ["grey", "#1a1a1a"],
  });

  const handleClick = (event) => {
    if (event.target.value != current) {
      setColors({
        ...colors,
        [event.target.value]: ["white", "#1f1f1f"],
        [current]: ["grey", "#1a1a1a"],
      });
      setCurrent(event.target.value);
      props.onItemChange(event.target.value);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <button
        name={props.items[0]}
        value="one"
        className="sliderbutton"
        style={{
          borderTopColor: colors.one[0],
          backgroundColor: colors.one[1],
        }}
        onClick={handleClick}
      >
        {props.items[0]}
      </button>
      <button
        name={props.items[1]}
        value="two"
        className="sliderbutton"
        onClick={handleClick}
        style={{
          borderTopColor: colors.two[0],
          backgroundColor: colors.two[1],
        }}
      >
        {props.items[1]}
      </button>
      <button
        name={props.items[2]}
        value="three"
        className="sliderbutton"
        onClick={handleClick}
        style={{
          borderTopColor: colors.three[0],
          backgroundColor: colors.three[1],
        }}
      >
        {props.items[2]}
      </button>
      <button
        name={props.items[3]}
        value="four"
        className="sliderbutton"
        onClick={handleClick}
        style={{
          borderTopColor: colors.four[0],
          backgroundColor: colors.four[1],
        }}
      >
        {props.items[3]}
      </button>
      <button
        name={props.items[4]}
        value="L1"
        className="sliderbutton"
        onClick={handleClick}
        style={{ borderTopColor: colors.L1[0], backgroundColor: colors.L1[1] }}
      >
        {props.items[4]}
      </button>
    </div>
  );
}
