const mongoose = require('mongoose');
const Furniture = require('./furnitureModel');

const commercialFurnitureSchema = new mongoose.Schema({
    ...Furniture.schema.obj,
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    variations: {
        color: {
            type: String,
            required: true
        },
        texture: {
            type: String,
            required: true
        },
        dimensions: {
            type: String,
            required: true
        },
        material: {
            type: String,
            required: true
        }
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('CommercialFurniture', commercialFurnitureSchema);