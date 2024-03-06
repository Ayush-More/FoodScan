const express = require("express");
const userRoute = require("./Routes/user");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use("api/v1/", userRoute);

module.exports = app;
