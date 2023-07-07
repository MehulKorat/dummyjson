const mongoose = require("mongoose");

const productschema = new mongoose.Schema({

    id: { type: String },
    name: { type: String },
   

});

exports.category = mongoose.model('category', productschema);
