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
        required: true
    },
    anchors: {
        type: String,
        required: true  
    },
    likes: {
        type: Number,
        required: true
    },
    saves: {    
        type: Number,
        required: true
    },
    shares: {
        type: Number,
        required: true
    },
    savedBy: {
        type: [User.schema.obj],
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('RoomBoard', roomBoardSchema);