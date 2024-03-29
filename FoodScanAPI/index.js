const express = require("express");
const userRoute = require("./Routes/user");
const foodRoute = require("./Routes/Foodscan");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/product", foodRoute);

module.exports = app;
