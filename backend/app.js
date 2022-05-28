const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config({ silent: true });

const _ = require("lodash");
const jwt = require("jsonwebtoken");
const passport = require("passport");
app.use(passport.initialize());

const { jwtOptions, jwtStrategy } = require("./jwt-config.js");
passport.use(jwtStrategy);

app.get("/", (req, res) => {
  res.send("Back end");
});

module.exports = app;
