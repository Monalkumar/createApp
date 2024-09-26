const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ name: "monal kumar", email: "monalshiv123@gmail.com" });
});
app.use("/user",(req,res)=>{
    console.log("hello router handler 1");
    res.send("response1")
},
(req,res)=>{
    console.log("hello route handler 2")
    res.send("response2")
},
)

app.use("/user",(req, res)=>{
    console.log("hello world")

})

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ name: "monal", age: 100, email: "monal@gmail.com" });
});

app.use(
  "/users",
  (req, res, next) => {
    console.log("1 response");
    // res.send("1 response get");
    next();
  },
  (req, res, next) => {
    console.log("2nd response");
    // res.send("gettting 2nd response");
    next();
  },
  (req, res, next) => {
    console.log("3rdresponse");
    // res.send("gettting 2nd response");
    next();
  },
  (req, res, next) => {
    console.log("4th response");
    // res.send("gettting 2nd response");
    next();
  },
  (req, res, next) => {
    console.log("5th response");
    res.send("gettting 2nd response");
  }
);

app.listen(1111, () => {
  console.log("server is running on port no 1111, thanks...");
});
