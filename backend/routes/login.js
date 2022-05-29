const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const passport = require("passport")
router.use(passport.initialize())
const { jwtOptions, jwtStrategy } = require("../jwt-config.js") 
passport.use(jwtStrategy)
const _ = require("lodash")

const users = require("../database/user_data.js")

router.post('/', async (req, res) => { 

    const email = req.body.email
    const password = req.body.password 

    //401: unauthorized 
    if (!email || !password) { 
        res
            .status(401) 
            .json( { 
                success: false, 
                message: `no email or password supplied`
            })
    }

    const user = users[_.findIndex(users, {email: email})]

    //404: no user with that email
    if (!user) { 
        res
            .status(404) 
            .json({ 
                success: false, 
                message: `user not found`
            })
    }

    //success
    else if (password === user.password) { 
        const payload = {id : user.id} 
        const token = jwt.sign(payload, jwtOptions.secretOrKey) 
        res.json({ 
            success: true, 
            email: email, 
            token: token, 
        })
    }

    //403: wrong password
    else { 
        res
            .status(403)
            .json({ 
                success: false, 
                message: `passwords did not match`
            })
    }

})

module.exports = router; 