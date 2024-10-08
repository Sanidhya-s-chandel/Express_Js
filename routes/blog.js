const express = require("express")
const router = express()

router.get("/",(req,res)=>{
    res.send("Blog Home")
})

router.get("/About",(req,res)=>{
    res.send("About Blog")
})

router.get("/Blogpost/:slug",(req,res)=>{
    res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router