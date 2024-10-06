const express = require("express");

const app = express();
const {authAdmin,authUser}= require("./middleware/auth")

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
app.use("/admin",authAdmin);
app.get("/users",(req,res)=>{
  res.send("user data sent")
  })

  app.get("/admin/getAllData",(req,res)=>{
    res.send("all data sent")
    })
    app.get("/admin/deletApi",(req,res)=>{
      res.send("all data sent")
      })
app.listen(1111, () => {
  console.log("server is running on port no 1111, thanks...");
});
