const express = require("express");
const userRoute = require("./Routes/user");
const foodRoute = require("./Routes/Foodscan");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/product", foodRoute);

module.exports = app;
