const db = require("../config");
const User = require("../models/User");

db.once("open", () => {
  console.log("we are connected");
});
db.on("error", (error) => {
  console.log("connection has been timedout" + `${error}`);
});

module.exports = {
    signUp: (req , res) => {
        const user = new User({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        });
        user.save()
        .then(saved => {
            console.log("User created successfully:", saved)
        })
        .catch(error => {
            console.log("error: ", error)
        })
    },

};
