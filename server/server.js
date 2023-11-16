const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`App Running on Port Number : ${port}`);
});
