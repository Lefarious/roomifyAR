const mongoose = require('mongoose');


const furnitureSchema = new mongoose.Schema({
    primaryColor: {
        type: String,
        required: true
    },
    secondaryColor: {
        type: String,
        required: true
    },
    texture: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dimensions: {
            width: {
                type: Number,
                required: true
            },
            height: {
                type: Number,
                required: true
            },
            depth: {
                type: Number,
                required: true
            }
        }
},
{
    timestamps: true
});

module.exports = mongoose.model('Furniture', furnitureSchema);