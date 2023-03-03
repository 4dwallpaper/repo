const express = require('express');
require('dotenv').config()
require('./database/db');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary");
const cors = require('cors'); 

cloudinary.config({
  cloud_name: "dz7rszpfi",
  api_key: "337929436899277",
  api_secret: "Us__uRp1mGUf9QynZVmUdBKjrwY",
  secure: true,
});
const app = express();
app.use(
  cors({
      credentials: true,
      origin: "https://turnon.app",
  })
);
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));

app.use(
  express.urlencoded({ extended: true })
);

app.use('/uploads', express.static('uploads'));

const index = require("./routes/index")

app.use("/4DApp", index)

const port  = process.env.PORT || 4000;

app.listen(port , function(){
    console.log("Server Started");
});      
