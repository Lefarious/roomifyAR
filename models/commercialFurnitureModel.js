const mongoose = require('mongoose');
const Furniture = require('./furnitureModel');

const commercialFurnitureSchema = new mongoose.Schema({
    ...Furniture.schema.obj,
    name: {
        type: String,
        required: true
    },
    manufacturerId: {
        type: String,
        required: true
    },
    variations: {    //look into this
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