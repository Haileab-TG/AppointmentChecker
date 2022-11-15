const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
import sendEmail from './sendEmail';

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/sendEmail', async (req, res)  => {
    const emailResult = await sendEmail();
    res.send(emailResult);
});

app.listen(4000, ()=> {
  console.log("Listening on port 4000");
});