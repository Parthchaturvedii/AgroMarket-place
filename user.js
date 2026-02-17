const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    name:String,
    email:{type:String, unique:true} ,
    password : String ,
    role : { type : String , enum : ["Farmer", "buyer"],
        default: "buyer"
    }
});

module.exports = mongoose.model("User" , userScheme);