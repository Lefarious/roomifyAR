const mongoose = require('mongoose');
const Furniture = require('./furnitureModel');

const indieFurnitureSchema = new mongoose.Schema({
    ...Furniture.schema.obj,
    name: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('IndieFurniture', indieFurnitureSchema);
