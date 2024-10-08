const express = require("express")
const app = express()

const blog = require("./routes/blog")

app.use(express.static("public")) // to use Post request use this line
app.use("/blog",blog)

// get request is a basic request from the browser through URL, 8192 bytes limit

app.get("/",(req,res)=>{
    console.log('its a get request');
    res.send("Hello...........")
})

// post request is used to sent sensitive information to the server or the data large in size

app.post("/post",(req,res)=>{
    console.log('its a Post request');
    res.send("Hello........... POST!!")
})

// put request is use to updating the resources

app.put("/put",(req,res)=>{
    console.log('its a Put request');
    res.send("Hello........... PUT!!")
})

// delete is used to handel delete request for the specified path

app.delete('/delete', (req, res) => { 
    console.log("route Delted");
    res.send("DELETE Request Called") 
}) 

app.get("/api",(req,res)=>{
    res.json({
        a:1,b:2,c:3,d:4,
        name:["Shanu","jaggu"]
    })
})

app.listen(3000)