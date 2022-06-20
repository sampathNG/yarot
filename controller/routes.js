const express = require('express');
const router = express.Router();
const {userPost,getUser,get} =require("./controller.js");
const user = require("../model/user")
// POST USER DATA
router.post("/post",userPost)
// GET USER DATA BY PHONE
router.get("/get/:phone",getUser)
// GET ALL USER DATA
router.get("/get",get)
module.exports = router;