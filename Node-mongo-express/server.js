
const mongoose = require('mongoose');
require('dotenv').config({path:'.env'});

mongoose.connect(process.env.DATABASE,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(err)=>{
    console.log('database err');
});

require('./Models/Users');

const app = require('./app');


const server = app.listen(3000,()=>{
    console,console.log(`Express running → PORT ${server.address().port}`);
})