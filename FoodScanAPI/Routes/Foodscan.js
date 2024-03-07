const express = require("express");
const authController = require("../controller/authentication_controller");

const router = express.Router();

router.get("/", authController.FetchAll);
router.get("/details", authController.ProductDetails);

module.exports = router;
