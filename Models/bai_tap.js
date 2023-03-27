const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bai_tap = new Schema({
    title: String,
    image: String,
    email: String,
})

module.exports = mongoose.model('Bai_tap', Bai_tap);
