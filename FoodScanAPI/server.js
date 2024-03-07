const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./index");
// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

mongoose
  .connect(
    "mongodb+srv://ayushmore:xJ2AVerf7eReJPoo@cluster0.t1ebzbt.mongodb.net/"
  )
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
