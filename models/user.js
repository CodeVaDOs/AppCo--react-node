const {Schema} = require('mongoose');
const mongoose = require('mongoose');

const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: {type: Number, unique: true},
    first_name: String,
    last_name: String,
    email: {type: String, unique: true},
    gender: String,
    ip_address: { type: String, default: "0.0.0.0"}
});

module.exports = mongoose.model('User', User);