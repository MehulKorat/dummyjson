const mongoose = require('mongoose')

const userschema = new mongoose.Schema({

    id: { type: String },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    gender: { type: String },
    image: { type: String },
    token: { type: String, default: "" },
})

const Register = mongoose.model('register', userschema);

module.exports = Register;