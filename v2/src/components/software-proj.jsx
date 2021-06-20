import React, { useState } from "react";
import Plus from "../assets/expand.png";
import NewProject from "./project-new";
import CertamenBot from "../assets/cbt.png";
import HwApp from "../assets/hwapp.jpeg";
import CoctBot from "../assets/coctbot.png";
import Coct from "../assets/coct.png";
import Stream from "../assets/stream.png";
import Cbotsite from "../assets/certamenbot-site.png";
import Brick from "../assets/brick.png";
import Fencing from "../assets/fencing.png";
import FadeIn from "react-fade-in";

export default function SoftwareProjects() {
  const [num, setNum] = useState(1);

  const arr = [
    <NewProject
      left={true}
      name="CertamenBot"
      img={CertamenBot}
      date="June 2020 (Still Maintained)"
      body="Developed a bot for Discord in order to properly facilitate Certamen (Latin quiz-bowl) matches in an online setting. Currently active in 20+ servers across the country."
      link={
        "https://discord.com/oauth2/authorize?client_id=726722356122484746&scope=bot&permissions=8"
      }
      type="Bot"
      tags={["JavaScript", "Node.js", "Discord.js"]}
    />,
    <NewProject
      left={false}
      name="COCTBot"
      img={CoctBot}
      date="September 2020"
      body="Supplemental Discord bot used for managing the California Online Certamen Tournament. Integrates with CertamenBot for best use. "
      link={"/not-found"}
      type="Bot"
      tags={["JavaScript", "Node.js", "Discord.js"]}
    />,
    <NewProject
      left={true}
      name="Personal School App"
      img={HwApp}
      date="March 2021 (In Development)"
      body="Currently developing a full stack app for personal use that re-skins and adds features to the iHW app, allowing for easy access to schedules, calendars, assignments, and more. "
      link={"/not-found"}
      type="App"
      tags={["React Native", "JavaScript", "ExpressJS", "Axios"]}
    />,
    <NewProject
      left={false}
      name="COCT"
      img={Coct}
      date="September 2020"
      body="Small frontend-only website for information, RSVP, and more for a statewide Certamen tournament."
      link={"https://coct.online"}
      type="Website"
      tags={["HTML5/CSS3", "JavaScript"]}
    />,
    <NewProject
      left={true}
      name="Youtube Livestream Sync"
      img={Stream}
      date="February 2021"
      body="Quick project in order to make it easier to view multiple streams concurrently. Linked as a page on this website."
      link={"/apps/streamsync"}
      type="Webapp"
      tags={["React", "JavaScript", "React-Player"]}
    />,
    <NewProject
      left={false}
      name="CertamenBot"
      img={Cbotsite}
      date="August 2020"
      body="Created two successive websites to re-learn HTML and CSS. The website is host to instructions and the download for CertamenBot."
      link={"https://certamenbot.graydon.sk"}
      type="Website"
      tags={["HTML5/CSS3", "JavaScript"]}
    />,
    <NewProject
      left={true}
      name="Bricklayers Collective"
      img={Brick}
      date="March 2021 (In Development)"
      body="Full-stack website for a student-run Mutual Aid organization in Los Angeles designed to handle donations and requests with a MongoDB datadabase."
      link={"https://bricklayerscollective.org"}
      type="Website"
      tags={["React", "JavaScript", "ExpressJS", "MongoDB"]}
    />,
    <NewProject
      left={false}
      name="CA COVID-19 Tracker"
      img={Brick}
      date="January 2021 (Paused Development)"
      body="Cross-platform COVID-19 tracker in development for California only, including data on cases, deaths, and vaccines."
      link={"/not-found"}
      type="App"
      tags={["React Native", "JavaScript", "Axios"]}
    />,
    <NewProject
      left={true}
      name="Personal Dashboard"
      img={Brick}
      date="January 2021 (In Development)"
      body="Cross-platform COVID-19 tracker in development for California only, including data on cases, deaths, and vaccines."
      link={"/not-found"}
      type="Desktop"
      tags={["React", "JavaScript", "Electron", "ExpressJS"]}
    />,
    <NewProject
      left={false}
      name="Personal Fencing Tracker"
      img={Fencing}
      date="March 2021"
      body="Personal webapp to keep track of upcoming fencing tournaments with a React frontend, Express backend, and MongoDB database."
      link={"/not-found"}
      type="Webapp"
      tags={["React", "JavaScript", "ExpressJS", "MongoDB"]}
    />,
  ];

  const handlePlusClick = () => {
    if (num != arr.length) {
      setNum(num + 1);
    }
  };

  const handleMinusClick = () => {
    if (num != 1) {
      setNum(num - 1);
    }
  };

  let image;

  if (num == arr.length) {
    image = <React.Fragment />;
  } else {
    image = (
      <img
        src={Plus}
        alt="plus"
        style={{ width: "35px" }}
        className="plus"
        onClick={handlePlusClick}
      />
    );
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        onClick={handleMinusClick}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {arr.slice(0, num).map((item) => (
          <React.Fragment>{item}</React.Fragment>
        ))}
      </div>

      {image}
    </div>
  );
}
