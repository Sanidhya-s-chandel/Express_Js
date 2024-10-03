const express = require("express")
const app = express()

app.set('view engine', 'ejs'); // use for using ejs (embaded js) files
app.use(express.static('public')); // use to public selected files

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/:name",(req,res)=>{
    res.send(`This is ${req.params.name} route`) // :varible-name can be used for diffrent routes to handel
})

// app.get("/:name/:secound",(req,res)=>{
//     res.send(`This is ${req.params.name} route and ${req.params.secound}`) 
// })

app.listen(3000)