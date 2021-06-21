import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FadeIn from "react-fade-in";
import axios from "axios";

export default function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  let history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = JSON.stringify(data);
    try {
      await axios.post("http://207.246.102.233:5000/api/form-submit", body);
      history.push("/submitted");
    } catch (err) {
      history.push("/");
      alert(
        "There was an error sending this email. Please try again at another time or contact me directly at gschulzekalt@gmail.com"
      );
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  };

  const handleReset = (event) => {
    setData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

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
            <form
              className="form"
              onSubmit={handleSubmit}
              onReset={handleReset}
            >
              <label htmlFor="fname" className="formText">
                First Name
              </label>
              <br />
              <input
                type="text"
                id="fname"
                className="forminput"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="lname" className="formText">
                Last Name
              </label>
              <br />
              <input
                type="text"
                id="lname"
                className="forminput"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="email" className="formText">
                Email
              </label>
              <br />
              <input
                type="text"
                id="email"
                className="forminput"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="message" className="formText">
                Message
              </label>
              <br />
              <textarea
                name="message"
                className="messagein"
                value={data.message}
                onChange={handleChange}
                required
              />
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
