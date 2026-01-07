const express = require("express");
const mongoose = require("mongoose");
const user = require("./Schema/UserSchema");
const cors = require('cors');




const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  try {
    console.log("hello aditya");
    res.send("Hello");
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect("mongodb://mongo:27017/dockerdb")
  .then(() => console.log("Mongo has started..."))
  .catch("Error :---");

app.get("/aditya", (req, res) => {
  res.send("Hello,Aditya");
});

app.post("/user", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await user.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.send(userData);
  } catch (error) {
    console.log(error, "Error");
  }
});

app.listen(8080, () => {
  console.log("Server has started at 8080");
});
