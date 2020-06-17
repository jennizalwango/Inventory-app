const express = require("express");
const bodyParser = require("body-parser");
const UsersRouter = require("./routers/UserRouter");
const db = require("./config")

const app = express();

app.use(bodyParser.json());
app.use("/api/v1", UsersRouter);

const port = 3000;

app.listen(port,() => {
  console.log(`Listening on port ${port}`)
});
