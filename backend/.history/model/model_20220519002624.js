const mongoose = require('mongoose');

const schema = mongoose.Schema;

const product_schema = new schema({
    name : {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: String, 
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    rating: {
        type: Integer,
        required: true
    }
});

module.exports = mongoose.model("Products", product_schema);