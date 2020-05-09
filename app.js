const express = require("express");
const bodyParser = require("body-parser");
const {signUp} = require("./controllers/userController");
const router = require("express-promise-router")();

const app = express();

app.use(bodyParser.json());
router.route("/auth/signup").post(signUp);

app.use(router);

const port = 3000;

app.listen(port,() => {
  console.log(`Listening on port${port}`)
});
