const nodemailer = require('nodemailer');
require('dotenv').config();
const Epass= process.env.Epass;
const Euser = process.env.Euser;
const From = process.env.From;
const To = process.env.To;
const cron = require('node-cron');




const sendEmail = () => {
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

// Schedule tasks to be run on the server.
cron.schedule('*/3 * * * * *', function() {
  sendEmail();
  console.log('running a task every minute');
});
