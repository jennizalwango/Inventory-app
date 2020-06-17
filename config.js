require("dotenv").config();
const mongoose = require("mongoose");

// database connection
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection;
db.once("open",() => {
  console.log("we are connected")
})
db.on("error", (error)=> {
  console.log("connection has been timedout" + `${error}`);
})

module.exports = db;
