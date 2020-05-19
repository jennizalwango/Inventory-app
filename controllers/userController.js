const User = require("../models/User")
require("dotenv").config();
const { signToken } = require("../auth")
const StatusCodes = require('http-status-codes')


module.exports = {
    signUp: (req , res) => {
        // check wether user exists before creating one
        User.findOne({email: req.body.email}).then(user => {
            if (user) {
                return res 
                .status(400)
                // .status(StatusCodes.CONFLICT)
                .json({message : "User already exits"});
            } else{
                // create a new user
                const user = new User({
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                });
                user.save()
                .then(saved => {
                    console.log("User created successfully:", saved)
                    const token = signToken(saved);
                    return res
                    .status(200)
                    .json({
                        message: "User created successfully",
                        Token: token
                    })
                .catch(error => {
                    console.log("error: ", error)
                    return res
                    .status(400)
                    .json({
                        message: "An error ocuured Signup failed"})
                }) 
                })
            }
        })
    },

};


