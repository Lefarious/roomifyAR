const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    console.log("validateToken");
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        if (!token) {
            res.status(401);
            return next(new Error("User is not authorized or token is missing"));
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                return next(new Error("User is not authorized"));
            }
            req.user = decoded.user;
            next();
        });
    }
});

module.exports = validateToken;