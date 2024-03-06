const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userModel = require("./../models/userModel");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  console.log("Cookie send");
  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.Signup = asyncHandler(async (req, res) => {
  try {
    if (req.body.username && req.body.password) {
      const user = userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        allergeies: req.body.allergeies,
        category: req.body.category,
        height: req.body.height,
        weight: req.body.weight,
      });
      createSendToken(user, 200, res);
    }
  } catch (error) {
    console.log("Error in the signup controller");
  }
});
