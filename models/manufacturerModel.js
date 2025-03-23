const mongoose = require('mongoose');
const CommercialFurniture = require('./commercialFurnitureModel');

const manufactureSchema = nwe.mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    products: {
        type: [CommercialFurniture.schema.obj]
    },
    rating: {
        type: Number
    },
},
{
    timestamps: true
});

module.exports = mongoose.model('Manufacturer', manufactureSchema);