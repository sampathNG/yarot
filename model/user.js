const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{type: 'string',required: true},
    email:{type: 'string',required: true},
    phone:{type: 'string',required: true},
    DOB:{type: 'string',required: true},
    gender:{type: 'string',required: true}
})

const users = mongoose.model("users",userSchema)
module.exports = users