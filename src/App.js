const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.send({ name: "monal kumar", email: "monalshiv123@gmail.com" });
});

app.post("/employees", (req, res) => {
  res.send("post apis successfully");
});

app.delete("/dlt", (req, res) => {
  res.send("delet negative thoughts");
});

app.use("/hello", (req, res) => {
  res.send("hello programmer");
});

app.listen(1111, () => {
  console.log("server is running on port no 1111, thanks...");
});
