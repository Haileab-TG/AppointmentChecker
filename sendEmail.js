const nodemailer = require('nodemailer');
require('dotenv').config();
const Epass= process.env.Epass;
const Euser = process.env.Euser;
const From = process.env.From;
const To = process.env.To;


const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: Euser,
    pass: Epass
  }
});

const options = {
  from: From,
  to: To,
  subject: "sending email first",
  text: "Hi there from HTG.IT"
}

transporter.sendMail(options, function(err, info){
  if (err){
    console.log(err);
    return;
  }
  console.log(info.response)
});