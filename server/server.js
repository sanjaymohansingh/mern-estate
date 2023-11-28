const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const listingRouter = require("./routes/listingRoute");
const cookieParser = require("cookie-parser");

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

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log(`App Running on Port Number : ${port}`);
});
