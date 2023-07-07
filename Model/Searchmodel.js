const mongoose = require("mongoose");

const productschema = new mongoose.Schema({

    id: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: String },
    discountPercentage: { type: String },
    rating: { type: String },
    stock: { type: String },
    brand: { type: String },
    category: { type: String },
    thumbnail: { type: String },
    images: { type: String }

});

const Searchproduct = mongoose.model('search', productschema);

module.exports = Searchproduct;