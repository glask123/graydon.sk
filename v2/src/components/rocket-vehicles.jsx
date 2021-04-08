import React, { useState } from "react";
import SliderMenu from "./slider";
import { ReactComponent as Circle } from "../assets/bodytube.svg";
import { ReactComponent as Width } from "../assets/width.svg";
import { ReactComponent as Parabola } from "../assets/parabola.svg";
import { ReactComponent as Dash } from "../assets/dash.svg";
import FadeIn from "react-fade-in";
import Rocket1 from "../assets/rocket1.png";
import Rocket4 from "../assets/rocket4.png";

export default function Vehicles() {
  const [current, setCurrent] = useState("one");

  const handleItemChange = (value) => {
    setCurrent(value);
  };

  if (current == "one") {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SliderMenu
          items={["1.0", "2.0", "3.0", "4.0", "L1"]}
          onItemChange={handleItemChange}
        />
        <div
          style={{
            width: "90%",
            position: "relative",
            marginBottom: "60px",
            minHeight: "330px",
            borderBottom: "2px solid grey",
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "130px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <FadeIn>
              <img
                src={Rocket1}
                alt="1.0"
                style={{
                  height: "320px",
                  width: "auto",
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </FadeIn>
          </div>
          <div style={{ height: "200px", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  marginBottom: "2px",
                  marginRight: "3px",
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#e6b035",
                }}
              />
              <h5 style={{ color: "#e6b035" }}>ASSEMBLY</h5>
            </div>
          </div>
          <div
            style={{
              width: "130px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "20px",
                paddingRight: "3px",
              }}
            >
              <Circle style={{ width: "70px", height: "auto" }} />
              <Width style={{ width: "70px", height: "auto" }} />
              <h5
                style={{
                  textAlign: "center",
                  marginTop: "-3px",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  lineHeight: "10px",
                }}
              >
                2in
              </h5>
            </div>

            <div
              style={{
                width: "135px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                paddingRight: "4px",
                marginBottom: "-7px",
              }}
            >
              <Parabola
                style={{
                  height: "140px",
                  width: "auto",
                  position: "absolute",
                }}
              />
              <FadeIn>
                <Dash
                  style={{
                    height: "140px",
                  }}
                />
              </FadeIn>

              <h5
                style={{
                  position: "absolute",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  bottom: "50px",
                  right: "27px",
                }}
              >
                120m
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (current == "two") {
    return (
      <div style={{ width: "100%" }}>
        <SliderMenu
          items={["1.0", "2.0", "3.0", "4.0", "L1"]}
          onItemChange={handleItemChange}
        />
        <Circle />
        <Width />
        <Parabola />
        <FadeIn>
          <Dash />
        </FadeIn>
      </div>
    );
  } else if (current == "three") {
    return (
      <div style={{ width: "100%" }}>
        <SliderMenu
          items={["1.0", "2.0", "3.0", "4.0", "L1"]}
          onItemChange={handleItemChange}
        />
        <Circle />
        <Width />
        <Parabola />
        <FadeIn>
          <Dash />
        </FadeIn>
      </div>
    );
  } else if (current == "four") {
    return (
      <div style={{ width: "100%" }}>
        <SliderMenu
          items={["1.0", "2.0", "3.0", "4.0", "L1"]}
          onItemChange={handleItemChange}
        />
        <Circle />
        <Width />
        <Parabola />
        <FadeIn>
          <Dash />
        </FadeIn>
        <img src={Rocket4} alt="4.0" />
      </div>
    );
  } else {
    return (
      <div style={{ width: "100%" }}>
        <SliderMenu
          items={["1.0", "2.0", "3.0", "4.0", "L1"]}
          onItemChange={handleItemChange}
        />
        <Circle />
        <Width />
        <Parabola />
        <FadeIn>
          <Dash />
        </FadeIn>
      </div>
    );
  }
}

/*

          <img
            src={Rocket1}
            alt="1.0"
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              height: "320px",
            }}
          />
        </div>
        <div
          style={{
            width: "calc(100% - 300px)",
            border: "1px solid white",
          }}
        >
          hello
        </div>
*/
