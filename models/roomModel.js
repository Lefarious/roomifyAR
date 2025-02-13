const mongoose = require('mongoose');
const Furniture = require('./furnitureModel');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    bounds: {
        type: String,
        default: null
    },
    boundAnchors: {
        type: String,
        default: null
    },
    furniture: {
        type: [Furniture.schema.obj],
        default: null
    },
    furnitureAnchors: {
        type: String,
        default: null
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Room', roomSchema);