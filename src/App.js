const express = require("express");

const app = express();


// app.get("/user/:userId/:name/:password", (req, res) => {
//   console.log(req.params);
//   res.send({ name: "monal kumar", email: "monalshiv123@gmail.com" });
// });
// app.use("/user",(req,res)=>{
//     console.log("hello router handler 1");
//     res.send("response1")
// },
// (req,res)=>{
//     console.log("hello route handler 2")
//     res.send("response2")
// },
// )

// app.use("/user",(req, res)=>{
//     console.log("hello world")

// })

// app.get("/users", (req, res,next) => {
//   console.log("hello");
//   res.send({ name: "monal", age: 100, email: "monal@gmail.com" });
//   next()
// });
// app.get("/users", (req, res,next) => {
//   console.log("hello 2");
//   res.send({ name: "monal", age: 100, email: "monal@gmail.com" });
// });
app.get("/getAllData",(req,res)=>{
  throw new Error("hsdgfhghfg");
  res.send("gsduhfgdhfghdg");
}),

app.use("/",(err,req,res,next)=>{
  if(err){ 
    res.status(500).send("someting went wrng")
  }})
app.listen(1111, () => {
  console.log("server is running on port no 1111, thanks...");
});
