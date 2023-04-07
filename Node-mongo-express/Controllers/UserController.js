const mongoose = require("mongoose");
const Users = mongoose.model('posts');

exports.baseRoute = async(req, res) => {
    res.send('Server Running');
}

exports.create = async(req, res) => {
    await new Users(req.body).save((err,data)=>{
        if(err){
            res.status(500).json({
                meassage: 
                "err"
            });
        } else {
            res.status(200).json({
                meassage:"User Created",
                data,
            });
        }
    })
}

exports.edit = async(req, res) => {
    let userID = req.params.id;
    await Users.findByIdAndUpdate({_id: userID},{$set: req.body},(err,data) => {
        if(err){
            res.status(500).json({
                meassage: 
                "err"
            });
        } else {
            res.status(200).json({
                meassage:"User Edited",
                data,
            });
        }
    })
}

exports.delete = async(req, res) => {
    let userID = req.params.id;
    await Users.deleteOne({_id: userID},(err,data) => {
        if(err){
            res.status(500).json({
                meassage: 
                "err"
            });
        } else {
            res.status(200).json({
                meassage:"User Deleted",
                data,
            });
        }
    })
}

exports.getAll = async(req, res) => {
    await Users.find((err,data) => {
        if(err){
            res.status(500).json({
                meassage: 
                "err"
            });
        } else {
            res.status(200).json({
                meassage:"Found",
                data,
            });
        }
    })
}