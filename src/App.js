const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ name: "monal kumar", email: "monalshiv123@gmail.com" });
});

app.listen(1111, () => {
  console.log("server is running on port no 1111, thanks...");
});
