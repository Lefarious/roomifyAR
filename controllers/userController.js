const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
    }); 