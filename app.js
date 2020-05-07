const express = require("express");
const db = require("./config");
const User = require("./models/User");

db.once("open", () => {
  console.log("we are connected");
});
db.on("error", (error) => {
  console.log("connection has been timedout" + `${error}`);
});

const user = new User({
  email: "test@gmail,com",
  password: "test123",
  role: "admin",
});

user.save();