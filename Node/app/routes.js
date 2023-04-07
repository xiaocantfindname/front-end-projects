var Sample = require("./model/Sample")
module.exports = function(app){
    app.get('/', function (req, res) {
        res.send('hello world')
    })

    app.get('/user/getAll', function(req,res){
        Sample.find(function(err,samples){
            if(err){
                res.send(err)
            }
            res.json(samples)
        })
    })

    app.post("/user/create", function(req,res){
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/
        const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
        var newUser = new Sample(req.body)
        if(regex.test(req.body.password)&&emailReg.test(req.body.email)){
            newUser.save(function(err,result){
                if(err){
                    res.status(500).json({
                        meassage: 
                        "err"
                    });
                } else {
                    res.status(200).json({
                        meassage:"User Created",
                        result,
                    });
                }
            })
        } else {
            res.status(500).json({
                meassage: 
                "invalid password or email"
            });
        }
        
    })

    app.post("/user/edit:id", function(req,res){
        var userID = req.params.id;
        const regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/;
        const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        console.log(regex2.test(req.body.password))
        console.log(emailReg.test(req.body.email))
        if(emailReg.test(req.body.email)){
            Sample.findByIdAndUpdate({_id: userID},{$set: req.body},(err,data) => {
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
        } else {
            res.status(500).json({
                meassage: 
                "invalid password or email"
            });
        }
    })

    app.delete("/user/delete", function(req,res){
        Sample.findOneAndDelete(req.body,(err,data) => {
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
    })
    
    
}