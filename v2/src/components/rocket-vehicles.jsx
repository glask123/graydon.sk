import React, { useState } from "react";
import SliderMenu from "./slider";
import { ReactComponent as Circle } from "../assets/bodytube.svg";
import { ReactComponent as Width } from "../assets/width.svg";
import { ReactComponent as Parabola } from "../assets/parabola.svg";
import { ReactComponent as Dash } from "../assets/dash.svg";
import FadeIn from "react-fade-in";
import Rocket1 from "../assets/rocket1.png";
import Rocket4 from "../assets/rocket4.png";
import Fire from "../assets/fire.png";
import Comp from "../assets/circuit.png";
import Cal from "../assets/cal.png";
import Weight from "../assets/weight.png";
import RocketL1 from "../assets/L1.png";

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
            marginBottom: "20px",
            minHeight: "330px",
            borderBottom: "2px solid grey",
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "105px",
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
          <div style={{ flex: 1 }}>
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
                  backgroundColor: "#fcdf03",
                }}
              />
              <h5 style={{ color: "#fcdf03" }}>ASSEMBLY</h5>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              1.0 is a passively stabilized test vehicle designed to better
              understand the mechanics behind parachute deployment. 5 flights
              planned with motors of varying impulse, 2 flights include a flight
              computer for datalogging once parachute deployment is proven.
            </p>
            <div
              className="rocket-icon-container"
              style={{ marginTop: "45px" }}
            >
              <img src={Fire} alt="Motor" className="rocket-icon" />
              <span className="rocket-icon-text">Estes C5-3, Estes D12-5</span>
            </div>
            <div className="rocket-icon-container">
              <img src={Comp} alt="Computer" className="rocket-icon" />
              <span className="rocket-icon-text">Volo</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Weight} alt="Weight" className="rocket-icon" />
              <span className="rocket-icon-text">227 [V.1]</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Cal} alt="Calendar" className="rocket-icon" />
              <span className="rocket-icon-text">Flights: April-May</span>
            </div>
          </div>
          <div
            style={{
              width: "105px",
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
                  height: "110px",
                  width: "auto",
                  position: "absolute",
                }}
              />
              <FadeIn>
                <Dash
                  style={{
                    height: "110px",
                  }}
                />
              </FadeIn>

              <h5
                style={{
                  position: "absolute",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  bottom: "30px",
                  right: "18px",
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
            marginBottom: "20px",
            minHeight: "330px",
            borderBottom: "2px solid grey",
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "105px",
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
          <div style={{ flex: 1 }}>
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
              <h5 style={{ color: "#e6b035" }}>DEVELOPMENT (20%)</h5>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              2.0 is an actively stabilized vehicle utilizing Thrust Vector
              Control. As the first of its kind in a series, it will attempt
              lower altitude flights to demonstrate the viability of a custom
              TVC mount. Likely will also include mechanical parachute ejection.
            </p>
            <div
              className="rocket-icon-container"
              style={{ marginTop: "45px" }}
            >
              <img src={Fire} alt="Motor" className="rocket-icon" />
              <span className="rocket-icon-text">E or F [Mid Power]</span>
            </div>
            <div className="rocket-icon-container">
              <img src={Comp} alt="Computer" className="rocket-icon" />
              <span className="rocket-icon-text">Volo</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Weight} alt="Weight" className="rocket-icon" />
              <span className="rocket-icon-text">Unknown</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Cal} alt="Calendar" className="rocket-icon" />
              <span className="rocket-icon-text">Flights: May-June</span>
            </div>
          </div>
          <div
            style={{
              width: "105px",
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
                3in
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
                  height: "110px",
                  width: "auto",
                  position: "absolute",
                }}
              />
              <FadeIn>
                <Dash
                  style={{
                    height: "110px",
                  }}
                />
              </FadeIn>

              <h5
                style={{
                  position: "absolute",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  bottom: "30px",
                  right: "20px",
                }}
              >
                50m
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (current == "three") {
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
            marginBottom: "20px",
            minHeight: "330px",
            borderBottom: "2px solid grey",
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "105px",
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
          <div style={{ flex: 1 }}>
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
              <h5 style={{ color: "#e6b035" }}>DEVELOPMENT (60%)</h5>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              3.0 is a passively stabilized 2-stage rocket using two upper-mid
              power motors to propel the vehicle to the highest altitude yet.
              Will likely fly upper-stage only for design verification.
            </p>
            <div
              className="rocket-icon-container"
              style={{ marginTop: "45px" }}
            >
              <img src={Fire} alt="Motor" className="rocket-icon" />
              <span className="rocket-icon-text">Estes F15</span>
            </div>
            <div className="rocket-icon-container">
              <img src={Comp} alt="Computer" className="rocket-icon" />
              <span className="rocket-icon-text">Volo [+]</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Weight} alt="Weight" className="rocket-icon" />
              <span className="rocket-icon-text">~800g</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Cal} alt="Calendar" className="rocket-icon" />
              <span className="rocket-icon-text">Flights: June-July</span>
            </div>
          </div>
          <div
            style={{
              width: "105px",
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
                3in
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
                  height: "110px",
                  width: "auto",
                  position: "absolute",
                }}
              />
              <FadeIn>
                <Dash
                  style={{
                    height: "110px",
                  }}
                />
              </FadeIn>

              <h5
                style={{
                  position: "absolute",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  bottom: "15px",
                  right: "14px",
                }}
              >
                520m
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (current == "four") {
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
            marginBottom: "20px",
            minHeight: "330px",
            borderBottom: "2px solid grey",
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "105px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <FadeIn>
              <img
                src={Rocket4}
                alt="1.0"
                style={{
                  height: "250px",
                  width: "100px",
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </FadeIn>
          </div>
          <div style={{ flex: 1 }}>
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
              <h5 style={{ color: "#e6b035" }}>DEVELOPMENT (30%)</h5>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              4.0 is an experimental actively stabilized replica of SpaceX's
              Starship vehicle. Utilizing an EDF for thrust and internal thrust
              vanes, 4.0 will lift off and hover at apogee, rotate on its side,
              then fall under the control of 4 rotating fins before parachute
              deployment or landing under EDF power.
            </p>
            <div
              className="rocket-icon-container"
              style={{ marginTop: "45px" }}
            >
              <img src={Fire} alt="Motor" className="rocket-icon" />
              <span className="rocket-icon-text">EDF</span>
            </div>
            <div className="rocket-icon-container">
              <img src={Comp} alt="Computer" className="rocket-icon" />
              <span className="rocket-icon-text">++</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Weight} alt="Weight" className="rocket-icon" />
              <span className="rocket-icon-text">Unknown</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Cal} alt="Calendar" className="rocket-icon" />
              <span className="rocket-icon-text">Flights: July-August</span>
            </div>
          </div>
          <div
            style={{
              width: "105px",
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
                5in
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
                  height: "110px",
                  width: "auto",
                  position: "absolute",
                }}
              />
              <FadeIn>
                <Dash
                  style={{
                    height: "110px",
                  }}
                />
              </FadeIn>

              <h5
                style={{
                  position: "absolute",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  bottom: "30px",
                  right: "24px",
                }}
              >
                N/A
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
            marginBottom: "20px",
            minHeight: "330px",
            borderBottom: "2px solid grey",
            display: "flex",
            flexDirection: "row",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "105px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <FadeIn>
              <img
                src={RocketL1}
                alt="1.0"
                style={{
                  height: "400px",
                  width: "auto",
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </FadeIn>
          </div>
          <div style={{ flex: 1 }}>
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
                  backgroundColor: "#e34f00",
                }}
              />
              <h5 style={{ color: "#e34f00" }}>CONCEPT</h5>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "18px",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              The L1 vehicle is purely conceptual, likely destined for Fall
              2021. Presumably will have a 4 inch diameter under the power of an
              H motor, passively controlled with 3 or 4 fins.
            </p>
            <div
              className="rocket-icon-container"
              style={{ marginTop: "45px" }}
            >
              <img src={Fire} alt="Motor" className="rocket-icon" />
              <span className="rocket-icon-text">H [High Power]</span>
            </div>
            <div className="rocket-icon-container">
              <img src={Comp} alt="Computer" className="rocket-icon" />
              <span className="rocket-icon-text">Unknown</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Weight} alt="Weight" className="rocket-icon" />
              <span className="rocket-icon-text">Unknown</span>
            </div>

            <div className="rocket-icon-container">
              <img src={Cal} alt="Calendar" className="rocket-icon" />
              <span className="rocket-icon-text">Unknown</span>
            </div>
          </div>
          <div
            style={{
              width: "105px",
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
                4in
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
                  height: "110px",
                  width: "auto",
                  position: "absolute",
                }}
              />
              <FadeIn>
                <Dash
                  style={{
                    height: "110px",
                  }}
                />
              </FadeIn>

              <h5
                style={{
                  position: "absolute",
                  fontFamily: "Poppins",
                  fontWeight: "300",
                  bottom: "30px",
                  right: "24px",
                }}
              >
                N/A
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
