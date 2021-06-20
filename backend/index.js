require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
const Discord = require("discord.js");

const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN;

const app = express();
const port = process.env.PORT || 5000;

var corsOptions = {
  origin: "http://graydonsk.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.google.com",
  auth: {
    user: process.env.EMAIL_ACC,
    pass: process.env.EMAIL_PASS,
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
