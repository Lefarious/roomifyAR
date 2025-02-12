const mongoose = require('mongoose');

const manufactureSchema = nwe.mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('Manufacturer', manufactureSchema);