import React from "react";
import Item from "./item";
import Software from "../assets/software.png";
import Rocketry from "../assets/rocket.jpg";
import Design from "../assets/3d.png";
import Theater from "../assets/theater.png";
import Music from "../assets/music.png";
import Photo from "../assets/photo.png";

function body() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <Item
        section="Software"
        image={Software}
        name="GITHUB"
        link="https://github.com/glask123"
      >
        <div className="title">Languages & Skills</div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>Java [Intermediate]</li>
            <li>HTML5/CSS [Intermediate]</li>
            <li>
              Javascript [Intermediate]
              <ul>
                <li style={{ marginLeft: "30px" }}>
                  knowledgeable in NodeJS, DiscordJS
                </li>
                <li style={{ marginLeft: "30px" }}>
                  beginner in React, React Native, ExpressJS, MongoDB, GraphQL,
                  JOI, Bootstrap
                </li>
              </ul>
            </li>
            <li>
              C++ [Novice]
              <ul>
                <li style={{ marginLeft: "30px" }}>
                  experience with Arduino & Teensy
                </li>
              </ul>
            </li>
            <li>C [Beginner]</li>
          </ul>
        </div>
        <div className="title">Courses</div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>AP Computer Science A [Java] — Harvard-Westlake</li>
            <li>
              AP Computer Science Principles [Javascript] — Harvard-Westlake (5)
            </li>
            <li>
              Introduction to Programming Fundamentals [C] — Duke University
              through Coursera
            </li>
          </ul>
        </div>
        <div className="title">Projects</div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>
              CertamenBot : : Discord bot coded in Javascript and Discord API
              (see more)
            </li>
            <li>
              COCTBot : : Discord bot coded in Javascript and Discord API
              <ul>
                <li style={{ marginLeft: "30px" }}>
                  Serves approximately 50 people in statewide CA Latin
                  competition to be held in Summer 2021
                </li>
              </ul>
            </li>
            <li>
              graydon.sk : : Personal website currently made with plain HTML,
              React in dev
            </li>
            <li>coct.online : : Competition website in dev with HTML/CSS/JS</li>
            <li>
              Crosss-platform COVID-19 Vaccination tracker app in development
              with React Native and NodeJS backend
            </li>
          </ul>
        </div>
      </Item>
      <Item
        section="Rocketry"
        image={Rocketry}
        name="YOUTUBE"
        link="https://www.youtube.com/channel/UC0ZOHGEBcc15STsyv-mx76Q"
      >
        <div className="title">Development Vehicles</div>
        <div className="body">
          <ul>
            <li style={{ marginLeft: "30px" }}>
              Rocket 1.0
              <ul style={{ marginLeft: "30px" }}>
                <li>
                  2in diameter passively stabilized test vehicle, designed to
                  better understand parachute deployment
                </li>
                <li>
                  Approximately 110m max apogee planned flying on an Estes D12
                </li>
                <li>
                  5 Flights planned with a combination of C5-3 and D12 motors
                </li>
                <li>
                  2 flights with Volo flight computer (see more) to understand
                  Arduino environment before moving to TVC
                </li>
                <li>
                  First flight planned for mid February, final flight in late
                  March
                </li>
              </ul>
            </li>
            <li style={{ marginLeft: "30px" }}>
              Rocket 2.0
              <ul style={{ marginLeft: "30px" }}>
                <li>
                  3in diameter actively stabilized vehicle with Thrust Vector
                  Control via Volo computer
                </li>
                <li>
                  Mechanical parachute deployment controlled by computer with a
                  servo
                </li>
                <li>
                  No flight profiles currently created, CAD and software in dev
                </li>
                <li>Mid-power motors (E or F)</li>
                <li>First flight planned for late April</li>
              </ul>
            </li>
            <li style={{ marginLeft: "30px" }}>
              Rocket 3.0
              <ul style={{ marginLeft: "30px" }}>
                <li>2 stage passively stabilized vehicle</li>
                <li>No development in progress</li>
                <li>
                  Upper-mid power motors, pathfinder vehicle before L1
                  Certification
                </li>
                <li>
                  Parachute deployment and datalogging starting with Volo
                  computer, then moving to Comp 2.0 (unnamed)
                </li>
                <li>First flight planned for Summer 2021</li>
              </ul>
            </li>
            <li style={{ marginLeft: "30px" }}>
              Rocket 4.0
              <ul style={{ marginLeft: "30px" }}>
                <li>
                  Test model of SpaceX's Starship flight vehicle, utilizing EDF
                  power rather than solid motors to assist in better control.
                </li>
                <li>
                  Active control using thrust vanes located within motor body
                </li>
                <li>
                  Four actuating fins for descent control before parachute
                  and/or EDF powered descent
                </li>
                <li>CAD modeling in progress</li>
                <li>
                  First flights planned to be purely a hopper vehicle to test
                  verticle ascent and descent tech
                </li>
                <li>Utilizing new SMD computer</li>
                <li>First flights in Summer 2021</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="title">Computers</div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>
              Volo : : First computer designed off of{" "}
              <a href="https://bps.space/" className="link">
                BPS Space's
              </a>{" "}
              Blip using Teensy 3.2
            </li>
            <li>Evectio : : Launch computer using Arduino Nano</li>
            <li>
              Unnamed : : Flight computer using SMD components based off of
              Teensy 3.2
            </li>
          </ul>
        </div>
        <div className="title">Technologies</div>
        <div className="body">
          <ul style={{ marginLeft: "30px" }}>
            <li>Autodesk EAGLE [Intermediate]</li>
            <li>Autodesk Inventor [Intermediate]</li>
            <li>Openrocket [Intermediate]</li>
            <li>Openmotor [Beginner]</li>
            <li>Matlab & Simulink [Learning]</li>
          </ul>
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
