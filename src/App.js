const connectDB = require("./config/database.js");
const express = require("express");
const app = express();
const User = require("./models/user.js");

app.post("/signup", async (req, res) => {
  const user = new User({
    fullName: "monal Kumar sinha",
    email: "monal@gmail.com",
    password: "monal@12345",
    age: 100,
    gender: "male",
  });

  try {
    await user.save();
    res.send("users added successfully");
  } catch (err) {
    res.status(401).send("something went wrng please resolve it");
  }
});

// const user=new user(userObj)
connectDB()
  .then(() => {
    console.log("database connected successfully");
    app.listen(1111, () => {
      console.log("server is listen successfully at port no 1111");
    });
  })
  .catch((err) => {
    console.log("error while connecting mongoose db system");
  });
