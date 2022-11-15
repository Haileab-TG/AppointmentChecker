const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const  sendEmail = require('./sendEmail');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/sendEmail', async (req, res)  => {
    await sendEmail.sendEmail();
    res.send({ date : (new Date())});
});

app.listen(4000, ()=> {
  console.log("Listening on port 4000");
});