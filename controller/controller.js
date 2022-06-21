const user = require("../model/user.js")
exports.userPost = async(req,res) => {
    try {
        const userr = new user ({
            name:req.query.name,
            email:req.query.email,
            phone:req.query.phone,
            DOB:req.query.DOB,
            gender:req.query.gender
        })
        const data  = await user.insertMany(userr);
        res.send("user added")
        console.log("user added")
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

exports.getUser= async(req,res)=>{
    try {
        const data = await user.findOne({phone:req.params.phone})
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send({error: error.message});
        console.log(error);
    }
}

exports.get= async(req,res)=>{
    try {
        const data = await user.find()
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send({error: error.message});
        console.log(error);
    }
}