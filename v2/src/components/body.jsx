import React from "react";
import Item from "./item";
import Software from "../assets/software.png";
import Rocketry from "../assets/rocket.jpg";
import Design from "../assets/3d.png";
import Theater from "../assets/theater.png";
import Music from "../assets/music.png";
import Photo from "../assets/photo.png";
import SoftwareProjects from "../components/software-proj";
import Button from "./linkbutton";
import Vehicles from "./rocket-vehicles";
import Computer from "./computer";
import StockCircuit from "../assets/stock-circuit.jpeg";
import BigTag from "./tag-big";

function body() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <Item section="Software" image={Software}>
        <div className="title">
          Languages & Skills
          <div
            style={{
              width: "50px",
              height: "1px",
              backgroundColor: "white",
              marginTop: "-2px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4 className="software-tag-title">Languages</h4>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            <BigTag tag="JavaScript" desc="Proficient" />
            <BigTag tag="HTML5/CSS" desc="Proficient" />
            <BigTag tag="C++" desc="Intermediate" />
            <BigTag tag="Java" desc="Intermediate" />
            <BigTag tag="Python" desc="Learning" />
            <BigTag tag="Swift" desc="Learning" />
            <BigTag tag="C" desc="Limited knowledge" />
          </div>
          <h4 className="software-tag-title">Libraries and Frameworks</h4>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            <BigTag tag="Node.js" desc="Proficient" />
            <BigTag tag="React" desc="Proficient" />
            <BigTag tag="React Native" desc="Intermediate" />
            <BigTag tag="Arduino" desc="Limited proficiency" />
            <BigTag tag="Express.js" desc="Proficient" />
            <BigTag tag="Electron" desc="Intermediate" />
            <BigTag tag="Expo" desc="Limited proficiency" />
          </div>
          <h4 className="software-tag-title">Tools & Platforms</h4>
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "25px",
            }}
          >
            <BigTag tag="MongoDB" desc="Intermediate" />
            <BigTag tag="Git" desc="Proficient" />
            <BigTag tag="Github" desc="Proficient" />
            <BigTag tag="Weebly, Wix, et al." desc="Proficient" />
          </div>
        </div>

        <div className="title">
          Projects
          <div
            style={{
              width: "50px",
              height: "1px",
              backgroundColor: "white",
              marginTop: "-2px",
            }}
          />
        </div>
        <SoftwareProjects />
        <Button
          name="GITHUB"
          link="https://github.com/glask123"
          local={false}
        />
      </Item>
      <Item
        section="Rocketry"
        image={Rocketry}
        name="YOUTUBE"
        link="https://www.youtube.com/channel/UC0ZOHGEBcc15STsyv-mx76Q"
      >
        <div className="title">Rockets</div>

        <Vehicles />
        <div className="title">
          Computers
          <div
            style={{
              width: "50px",
              height: "1px",
              backgroundColor: "white",
              marginTop: "-2px",
            }}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-10px",
          }}
        >
          <Computer
            img={StockCircuit}
            name="Volo"
            desc="Primary flight computer designed off of BPS Space's Blip computer using through-hole mounted components."
            cpu="MK20DX256VLH7 (Teensy 3.2)"
            imu="MPU-6050"
            pressure="BMP280"
          />
          <Computer
            img={StockCircuit}
            name="Evectio"
            desc="Primary launch computer, first fully-custom designed computer in Eagle based on an Arduino Nano."
            cpu="atmega328p (Nano)"
            imu="N/A"
            pressure="N/A"
          />
          <Computer
            img={StockCircuit}
            name="COMING SOON"
            desc="SMD flight computer custom designed in Eagle with better sensors, more I/O, and more capability."
            cpu="MK20DX256VLH7 (PJRC Schematic)"
            imu="BNO-055"
            pressure="BMP280"
          />
        </div>

        <div className="title" style={{ marginTop: "15px" }}>
          Technologies
          <div
            style={{
              width: "50px",
              height: "1px",
              backgroundColor: "white",
              marginTop: "-2px",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <BigTag tag="C++ (Arduino)" desc="Intermediate" />
            <BigTag tag="Autodesk Eagle" desc="Proficient" />
            <BigTag tag="Autodesk Inventor" desc="Proficient" />
            <BigTag tag="OpenRocket" desc="Proficient" />
            <BigTag tag="OpenMotor" desc="Limited proficiency" />
            <BigTag tag="Matlab & Simulink" desc="Learning" />
          </div>
        </div>
      </Item>

      <Item section="Music" image={Music} name="SPOTIFY">
        <div className="title">Instruments</div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>Guitar – 10 years</li>
            <li>Bass, Piano, Drums on and off for 5-6 years</li>
          </ul>
        </div>
        <div className="title">Instruments</div>
        <div className="body" style={{ marginLeft: "35px" }}>
          I've produced with Logic Pro 9/X for 9 years ever since it was
          introduced to me in 3rd grade. I've shifted genres over time, but the
          main styles of music that I compose are Rock, Jazz, and
          Neo-Soul/Jazz/Funk-inspired music.
        </div>
      </Item>
      <Item section="Design" image={Design} name="GALLERY">
        <div className="title">3D Modeling</div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>Sketchup [Intermediate-Advanced]</li>
            <li>Blender [Intermediate]</li>
            <li>Autodesk Inventor [Intermediate]</li>
          </ul>
        </div>
        <div className="title">Graphic Design</div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>Adobe Photoshop [Experienced]</li>
            <li>Adobe Illustrator [Experienced]</li>
            <li>Adobe XD [Intermediate]</li>
            <li>Adobe InDesign [Beginner]</li>
          </ul>
        </div>
      </Item>
      <Item
        section="Photo/Video"
        image={Photo}
        name="YOUTUBE"
        link="https://www.youtube.com/channel/UC0ZOHGEBcc15STsyv-mx76Q"
      >
        <p className="body" style={{ marginLeft: 0 }}>
          I direct/produce/edit film projects which I plan to do more this year
          and release on youtube, possibly on both my personal channel as well
          as a collaborative research project.
        </p>
        <div className="title" style={{ marginTop: 10 }}>
          Programs
        </div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>Adobe Premiere Pro [Experienced]</li>
            <li>Adobe Photoshop [Experienced]</li>
            <li>Adobe Lightroom Classic [Beginner]</li>
            <li>Adobe After Effects [Beginner]</li>
          </ul>
        </div>
      </Item>
      <Item section="Stagecraft" image={Theater} name="LMP">
        <p className="body" style={{ marginLeft: 0 }}>
          Work primarily in lighting and sound design/operation for high school
          productions since 2016 through a variety of programs. Most knowledge
          in the EOS family of lighting consoles and digital audio systems.
        </p>
        <div className="title" style={{ marginTop: 10 }}>
          Shows
        </div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>Fiddler on the Roof (backstage) — LMP 2016</li>
            <li>Oliver! (backstage) — LMP 2017</li>
            <li>
              Guys & Dolls (Lighting designer/programmer/operator) — LMP 2017
            </li>
            <li>Once on This Island (Sound designer/operator) — LMP 2017</li>
            <li>
              Footloose (Lighting designer/programmer, Sound operator) — LMP
              2018
            </li>
            <li>
              Guys & Dolls (Lighting designer/programmer, Sound
              designer/programmer) - W 2018
            </li>
            <li>
              Hair (Lighting co-designer/programmer, Sound designer/operator) —
              LMP 2018
            </li>
            <li>Crazy for You (Lighting help) — LMP 2019</li>
            <li>Dance Production (Sound operator) — HW 2019</li>
            <li>
              Company (Lighting designer/programmer, Sound designer/operator) —
              LMP 2019
            </li>
            <li>Into the Woods (Spotlight) — HW 2019</li>
            <li>& More (Paused due to COVID-19)</li>
          </ul>
        </div>
      </Item>
      <div style={{ height: "50px" }}></div>
    </div>
  );
}

export default body;
