const express = require("express")
const app = express()

app.use(express.static("public")) // this is a middleware

// Middleware m1
app.use((req,res,next)=>{
    console.log('m1');
    // res.send("Hello its middleware") // this is middleware response and will not send control forward it res is sent here
    next() // if not used then the request will not pass and will get hanged
})

// Middleware m2
app.use((req,res,next)=>{
    console.log('m2');
    next()
})

app.get("/",(req,res)=>{
    res.send("Hello World.....")
})

app.get("/about",(req,res)=>{
    res.send("Hello About.....")
})

app.get("/contactMe",(req,res)=>{
    res.send("Hello Contact Me.....")
})

app.listen(3000)