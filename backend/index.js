const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
const Discord = require("discord.js");

const client = new Discord.Client();

const token = "ODEwMjk3MzQwNDY3MzQ3NTA4.YChmNA.6NP4DgJ6b607SUpAvx7pWRfFcdI";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.google.com",
  auth: {
    user: "gskmailing@gmail.com",
    pass: "Oswaldnox123",
  },
});

app.post("/form-submit", (req, res) => {
  console.log(req.body);

  transporter.sendMail(
    {
      from: '"graydon.sk" <gskmailing@gmail.com>',
      to: "gschulzekalt@gmail.com",
      subject: "New Message",
      text: "",
      html: `<h1>New Message Received</h1>
      <br />
      <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
        <li>Message: ${req.body.message}</li>
      </ul>`,
    },
    function (err, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );

  res.status(200).send("form data received");
});

app.listen(port, () => console.log(`Listening on port ${port}`));


