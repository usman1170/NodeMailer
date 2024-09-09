const nodemailer = require("nodemailer");
const secrets = require("../secrets");

const home = (req, res) => {
  res.send("hello world");
};
const sendMail = async (req, res) => {
  let acc = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: secrets.email,
      pass: secrets.password,
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: `"Maddison Foo Koch 👻" <${secrets.email}>`,
      to: "usman@gmail.com, usman1@gamil.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);

    res.json(info);
  }

  main().catch(console.error);
};
module.exports = {
  sendMail,
  home,
};
