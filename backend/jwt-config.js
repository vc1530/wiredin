require("dotenv").config({ silent: true }) 
const passportJWT = require("passport-jwt")
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy
const _ = require("lodash")

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt") 
jwtOptions.secretOrKey = process.env.JWT_SECRET

const jwtStrategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
  console.log("hey!") 
  console.log("JWT payload received", jwt_payload) 
  const users = require("./database/user_data.js")
  const user = users[_.findIndex(users, { id: jwt_payload.id })] 
  if (user) {
    next(null, user)
  } else {
    next(null, false)
  }
})

module.exports = {
  jwtOptions,
  jwtStrategy,
}