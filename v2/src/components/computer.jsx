import React from "react";
import Cpu from "../assets/cpu.png";
import Imu from "../assets/imu.png";
import Pressure from "../assets/pressure.png";

export default function Computer(props) {
  return (
    <div
      style={{
        marginTop: "10px",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <img
        src={props.img}
        alt={props.name}
        style={{
          width: "230px",
          height: "160px",
          objectFit: "cover",
          border: "3px solid black",
        }}
      />
      <div style={{ marginLeft: "10px" }}>
        <h3 style={{ fontSize: "14px", fontWeight: 400 }}>{props.name}</h3>
        <p style={{ fontSize: "13px", fontWeight: 200 }}>{props.desc}</p>
        <div className="comp-icon-container" style={{ marginTop: "8px" }}>
          <img src={Cpu} alt="CPU" className="comp-icon" />
          <span className="comp-text">{props.cpu}</span>
        </div>
        <div className="comp-icon-container">
          <img src={Imu} alt="IMU" className="comp-icon" />
          <span className="comp-text">{props.imu}</span>
        </div>
        <div className="comp-icon-container">
          <img src={Pressure} alt="Pressure" className="comp-icon" />
          <span className="comp-text">{props.pressure}</span>
        </div>
      </div>
    </div>
  );
}
