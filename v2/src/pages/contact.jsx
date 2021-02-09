import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";

export default function contact() {
  return (
    <div>
      <FadeIn>
        <Link to="/">
          <div className="x">X</div>
        </Link>
      </FadeIn>
      <div className="contact">
        <FadeIn>
          <div className="formdiv">
            <h1
              style={{
                fontFamily: "Poppins",
                fontWeight: "200",
                fontSize: "25px",
                textAlign: "center",
              }}
            >
              CONTACT
            </h1>
            <form className="form">
              <label for="fname" className="formText">
                First Name
              </label>
              <br />
              <input type="text" id="fname" className="forminput" />
              <br />
              <label for="lname" className="formText">
                Last Name
              </label>
              <br />
              <input type="text" id="lname" className="forminput" />
              <br />
              <label for="email" className="formText">
                Email
              </label>
              <br />
              <input type="text" id="email" className="forminput" />
              <br />
              <label for="message" className="formText">
                Message
              </label>
              <br />
              <textarea name="message" className="messagein" />
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  margin: "15px",
                }}
              >
                <input type="submit" id="submit" className="sub" value="SEND" />
                <input type="reset" id="reset" className="sub" value="RESET" />
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
