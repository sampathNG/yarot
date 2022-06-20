const express = require('express');
const router = express.Router();
const {userPost,getUser} =require("./controller.js");
const user = require("../model/user")
router.post("/post",userPost)
// GET USER DATA
router.get("/get/:phone",getUser)
module.exports = router;