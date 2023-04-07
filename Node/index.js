const express = require('express')
const app = express()
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","OPTIONS,GET,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type, X-Requested-With, Authorization");

    next();
});

mongoose.connect('mongodb+srv://xiao:forinfo6150@cluster0.ymr57.mongodb.net/ass_7?retryWrites=true&w=majority',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(err)=>{
    console.log('database err');
});

require("./app/routes")(app)



app.listen(3000)