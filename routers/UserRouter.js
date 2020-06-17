const router = require("express-promise-router")();
const { signUp } = require("../controllers/userController");
const {validatesignup } = require("../helpers/userValidation")
// const { authenticate} = require("../auth");


router.route("/auth/signup").post(validatesignup(), signUp);

module.exports = router;