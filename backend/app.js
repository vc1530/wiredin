const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config({ silent: true });

const _ = require("lodash");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded());
app.use(cors()) 
app.use(passport.initialize());

const { jwtOptions, jwtStrategy } = require("./jwt-config.js");
passport.use(jwtStrategy);

app.get("/", (req, res) => {
  console.log("hello") 
  res
      .send("Back end")
      .json({
        success: true, 
      })
});

const login = require('./routes/login') 

app.use('/login', login) 

module.exports = app;
