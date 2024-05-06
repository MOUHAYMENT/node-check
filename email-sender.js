// email-sender.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password",
  },
});



// Send mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
