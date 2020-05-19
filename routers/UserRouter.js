const router = require("express-promise-router")();
const { signUp } = require("../controllers/userController");
const { authenticate} = require("../auth");


router.route("/auth/signup").post(signUp);

module.exports = router;