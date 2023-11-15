const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App Running on Port Number : ${port}`);
});
