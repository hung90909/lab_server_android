const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const xeHoi = new Schema({
    ten:String,
    name:Number,
    giaBan:Number

})
module.exports = mongoose.model("xeHoi",xeHoi)