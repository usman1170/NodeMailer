const nodemailer = require("nodemailer");
const express = require("express");
const sendMail = require("./controllers/sendmail");

const app = express();

const start = async () => {
  app.listen(5000, () => {
    console.log("Server is running on port 3000");
  });
};

app.get("/", sendMail.home);
app.get("/mail", sendMail.sendMail);

start();
