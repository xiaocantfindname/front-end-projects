var mongoose = require("mongoose")

module.exports = mongoose.model("Sample",{
    email:{
        type: String,
        default: ''
    },
    password:{
        type: String,
        default: ''
    }
})