import React from "react";
import Item from "./item";

import SoftwareProjects from "../components/software-proj";
import Button from "./linkbutton";
import Vehicles from "./rocket-vehicles";
import Computer from "./computer";
import BigTag from "./tag-big";

import Show from "../components/show";
import Adobe from "../components/adobe";

import Software from "../assets/icons/software.png";
import Rocketry from "../assets/icons/rocket.jpg";
import Design from "../assets/icons/3d.png";
import Theater from "../assets/icons/theater.png";
import Music from "../assets/icons/music.png";
import Photo from "../assets/icons/photo.png";

import Evectio from "../assets/rocket/computers/evectio.jpg";
import Volo from "../assets/rocket/computers/volo.jpg";
import Upcoming from "../assets/rocket/computers/smd.png";

import Instruments from "../assets/music/musicsill.png";
import { ReactComponent as Checkbox } from "../assets/music/checkbox.svg";

import Island from "../assets/shows/island.png";
import Company from "../assets/shows/company.jpeg";
import Fiddler from "../assets/shows/fiddler.png";
import Hair from "../assets/shows/hair.png";
import Oliver from "../assets/shows/oliver.png";
import Guys from "../assets/shows/guys.png";
import Footloose from "../assets/shows/footloose.png";
import Crazy from "../assets/shows/crazy.png";

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
            img={Volo}
            name="Volo"
            desc="Primary flight computer designed off of BPS Space's Blip computer using through-hole mounted components."
            cpu="MK20DX256VLH7 (Teensy 3.2)"
            imu="MPU-6050"
            pressure="BMP280"
          />
          <Computer
            img={Evectio}
            name="Evectio"
            desc="Primary launch computer, first fully-custom designed computer in Eagle based on an Arduino Nano."
            cpu="atmega328p (Nano)"
            imu="N/A"
            pressure="N/A"
          />
          <Computer
            img={Upcoming}
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
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={Instruments} style={{ width: "70%" }} alt="" />
        </div>
        <div className="check">
          <Checkbox style={{ width: 20, height: "auto", marginRight: 5 }} />
          Primary instrument: Guitar
        </div>
        <div className="check">
          <Checkbox style={{ width: 20, height: "auto", marginRight: 5 }} />
          Also play bass, piano, and drums.
        </div>
        <div className="check">
          <Checkbox style={{ width: 20, height: "auto", marginRight: 5 }} />
          Genres: Classic Rock, Alternative Rock, Jazz, Soul, Funk, Neo-Soul
        </div>
        <div className="check">
          <Checkbox style={{ width: 20, height: "auto", marginRight: 5 }} />
          High School Jazz Ensemble
        </div>
        <div className="check">
          <Checkbox style={{ width: 20, height: "auto", marginRight: 5 }} />
          Middle School Rock Band
        </div>
        <div style={{ textAlign: "center", fontSize: 14, marginTop: 10 }}>
          Production/Composition in Logic Pro since 3rd grade in variety of
          genres. Experience recording live music as well as electronic
          instruments. Check out the Spotify link below for any upcoming
          projects.
        </div>

        <Button
          name="SPOTIFY"
          link="https://open.spotify.com/user/glask1234"
          local={false}
        />
      </Item>
      <Item section="Design" image={Design} name="GALLERY">
        <div className="title">3D Modeling</div>
        <p
          className="body"
          style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}
        >
          Interior design in SketchUp for architectural drawings and sizing,
          which are then used to create photorealistic renders in Blender for a
          final product. I also use Blender for animation/modeling. Inventor is
          used as primary CAD software for all things technical, including
          Rocketry, and models are 3D printed.
        </p>
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
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            <BigTag tag="Blender" desc="Proficient" />
            <BigTag tag="SketchUp" desc="Proficient" />
            <BigTag tag="Autodesk Inventor" desc="Intermediate" />
            <BigTag tag="Autodesk Fusion 360" desc="Beginner" />
          </div>
        </div>
        <div className="title">Graphic Design</div>
        <p
          className="body"
          style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}
        >
          I do 2D design in a variety of programs, both raster and vector
          graphics, for a variety of purposes. All websites and apps that I
          build are designed in Adobe XD before production.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Adobe
            program="Ps"
            color="#032733"
            bordercolor="#4EBFE7"
            level="Proficient"
          />
          <Adobe
            program="Ai"
            color="#251401"
            bordercolor="#FA7A01"
            level="Proficient"
          />
          <Adobe
            program="Xd"
            color="#2B011F"
            bordercolor="#EB2EC6"
            level="Proficient"
          />
          <Adobe
            program="Id"
            color="#300012"
            bordercolor="#E74787"
            level="Intermediate"
          />
        </div>
      </Item>
      <Item
        section="Photo/Video"
        image={Photo}
        name="YOUTUBE"
        link="https://www.youtube.com/channel/UC0ZOHGEBcc15STsyv-mx76Q"
      >
        <p
          className="body"
          style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}
        >
          Work primarily in lighting and sound design/operation for high school
          productions since 2016 through a variety of programs. Most knowledge
          in the EOS family of lighting consoles and digital audio systems.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Adobe
            program="Ps"
            color="#032733"
            bordercolor="#4EBFE7"
            level="Proficient"
          />
          <Adobe
            program="Lr"
            color="#022327"
            bordercolor="#3BDBD8"
            level="Intermediate"
          />
          <Adobe
            program="Pr"
            color="#180024"
            bordercolor="#DB7FE9"
            level="Proficient"
          />
          <Adobe
            program="Ae"
            color="#1F0240"
            bordercolor="#C285F0"
            level="Beginner"
          />
        </div>
      </Item>
      <Item section="Stagecraft" image={Theater} name="LMP">
        <p
          className="body"
          style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}
        >
          Work primarily in lighting and sound design/operation for high school
          productions since 2016 through a variety of programs. Most knowledge
          in the EOS family of lighting consoles and digital audio systems.
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <Show
            name="Fiddler on the Roof"
            position="Backstage"
            company="LMP"
            year="2016"
            bg={Fiddler}
          />
          <Show
            name="Oliver!"
            position="Backstage"
            company="LMP"
            year="2017"
            bg={Oliver}
          />
          <Show
            name="Guys & Dolls"
            position="Lighting (design & ops)"
            company="LMP"
            year="2017"
            bg={Guys}
          />
          <Show
            name="Once on This Island"
            position="Sound (design & ops)"
            company="LMP"
            year="2017"
            bg={Island}
          />
          <Show
            name="Footloose"
            position={"Lighting design, Sound (design & ops)"}
            company="LMP"
            year="2018"
            bg={Footloose}
          />
          <Show
            name="Guys & Dolls"
            position="Lighting & sound design"
            company="Willows"
            year="2018"
            bg={Guys}
          />
          <Show
            name="Hair"
            position="Lighting design, Sound (design & ops) "
            company="LMP"
            year="2018"
            bg={Hair}
          />
          <Show
            name="Crazy for You"
            position="Lighting asst."
            company="LMP"
            year="2019"
            bg={Crazy}
          />
          <Show
            name="Dance Production"
            position="Sound ops"
            company="Harvard-Westlake MS"
            year="2019"
          />
          <Show
            name="Company"
            position="Lighting design, Sound (design & ops)"
            company="LMP"
            year="2019"
            bg={Company}
          />
          <Show
            name="Into the Woods"
            position="Spot"
            company="Harvard-Westlake US"
            year="2019"
          />
        </div>
      </Item>
      <div style={{ height: "80px" }}>.</div>
    </div>
  );
}

export default body;
