const express = require("express")

const app = express()


app.use("/test",(req,res)=>{
    res.send("hello programmer")
})

app.listen(3000,()=>{
    console.log("server is running on port no 3000, thanks...")
})