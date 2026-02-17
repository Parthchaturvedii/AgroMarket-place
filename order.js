const mongoose = require("mongoose");
const product = require("./product");
const { create } = require("./user");

const orderSchema = new mongoose.Schema({
    buyer:{ type : mongoose.Schema.Types.ObjectId,ref:"User"} ,
    item:[{product:{type:mongoose.Schema.Types.ObjectId,ref:"Product"}, quantity:Number}],
    total:Number,
    createAt : {type:Date , default:Date.now}
});

module.export = mongoose.model("order",orderSchema);