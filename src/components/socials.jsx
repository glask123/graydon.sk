import React from "react";
import Phone from "../assets/phone.png";
import Twitter from "../assets/twitter.png";
import Mail from "../assets/mail.png";
import Linkedin from "../assets/linkedin.png";
import Insta from "../assets/insta.png";
import Yt from "../assets/yt.png";

function socials() {
  return (
    <div className="socials">
      <a href="tel:1-310-978-7535" style={{ cursor: "pointer" }}>
        <img src={Phone} alt="phonenum" className="social" />
      </a>

      <a href="mailto:gschulzekalt@gmail.com" style={{ cursor: "pointer" }}>
        <img src={Mail} alt="mailto" className="social" />
      </a>

      <a
        href="https://www.youtube.com/channel/UC0ZOHGEBcc15STsyv-mx76Q"
        style={{ cursor: "pointer" }}
      >
        <img src={Yt} alt="youtube" className="social" />
      </a>

      <a
        href="https://www.instagram.com/glask123/"
        style={{ cursor: "pointer" }}
      >
        <img src={Insta} alt="instagram" className="social" />
      </a>

      <a
        href="https://www.linkedin.com/in/graydon-schulze-kalt-2313a71b0/"
        style={{ cursor: "pointer" }}
      >
        <img src={Linkedin} alt="in" className="social" />
      </a>

      <a href="https://twitter.com/graydonsk" style={{ cursor: "pointer" }}>
        <img src={Twitter} alt="twitter" className="social" />
      </a>
    </div>
  );
}

export default socials;
