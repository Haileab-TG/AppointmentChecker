const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
// const  sendEmail = require('./sendEmail');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const nodemailer = require('nodemailer');
require('dotenv').config();
const Epass= process.env.Epass;
const Euser = process.env.Euser;
const From = process.env.From;
const To = process.env.To;

const sendEmail = () => {
  console.log("Send email has called")
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
    subject: new Date() +" sending email first",
    text: "Hi there from HTG.IT"
  }
  
  const result = transporter.sendMail(options, function(err, info){
    if (err){
      console.log(err);
      return ;
    }
     console.log(info.response);
  });
}


app.get('/sendEmail', async (req, res)  => {
    sendEmail();
    res.send({data: 'there you are @ 4000', date : (new Date())});
});

app.listen(4000, ()=> {
  console.log("Listening on port 4000");
});