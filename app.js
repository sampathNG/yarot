require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const db = require("./model/config.js")
const route = require("./controller/routes.js")
app.use("/",route)
app.get("/",async (req, res) => {
    try {
        res.send("Helo World")
        console.log("Helo World")
    } catch (error) {
        res.send({error: error.message});
        console.error(error)
    }
})
app.listen(process.env.PORT,console.log(`running on port ${process.env.PORT}`))