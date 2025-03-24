const mongoose = require('mongoose');
const Furniture = require('./furnitureModel');

const roomBoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    models: {
        type: [Furniture.schema.obj],
        default: null
    },
    anchors: {
        type: String,
        default: null 
    },
    likes: {
        type: Number,
        default: 0
    },
    saves: {    
        type: Number,
        default: 0
    },
    shares: {
        type: Number,
        default: 0
    },
    savedBy: {
        type: [User.schema.obj],
        default: null
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('RoomBoard', roomBoardSchema);