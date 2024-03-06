const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide the valid name"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  allergies: {
    type: String,
    trim: true,
  },
  age: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
    enum: ["veg", "non-veg", "vegan"],
    required: [true, "the category is required"],
  },
  height: {
    type: String,
    required: [true, "the height is required"],
    default: "5.8",
  },
  weight: {
    type: String,
    required: [true, "the height is required"],
    default: "80",
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
