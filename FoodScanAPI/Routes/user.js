const express = require("express");
const authController = require("../controller/authentication_controller");

const router = express.Router();

router.post("/signup", authController.Signup);
module.exports = router;
