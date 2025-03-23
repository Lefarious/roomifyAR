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
    url: {
        type: String,
        required: true
    },
    variations: {    //look into this
        color: {
            type: String
        },
        texture: {
            type: String
        },
        dimensions: {
            type: String
        },
        material: {
            type: String
        }
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('CommercialFurniture', commercialFurnitureSchema);