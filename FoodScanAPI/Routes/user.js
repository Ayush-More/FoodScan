const express = require("express");
const authController = require("../controller/authentication_controller");

const router = express.Router();

router.post("/signup", authController.Signup);
router.post("/login", authController.login);
module.exports = router;
