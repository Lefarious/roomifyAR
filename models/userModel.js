const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    userRole: {                 // userRole can be 'admin', 'user', 'manufacturer'
        type: String,
        required: true,
        default: 'user'
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
