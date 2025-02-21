const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//@desc Get User
//@route GET /api/Users/:id
//@access public

const getUser = asyncHandler (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    res.status(200).json(user);
});

//@desc Get all Users
//@route GET /api/Users/
//@access public

const getUsers = asyncHandler (async (req,res) => {
    const users = await User.find();
    res.status(200).json(users);
});

//@desc Signup a new User
//@route POST /api/Users/signup/
//@access public

const createUser = asyncHandler (async (req,res,next) => {
    console.log("Request body : ", req.body);
    const {name, email, password, phone} = req.body;
    if (!name || !email || !password || !phone){
        res.status(400);
        return next(new Error("All fields are mandatory"));
    }
    const user = await User.create({ name, email, phone, password });
    res.status(201).json(user);
});

//@desc Update User
//@route PUT /api/Users/:id
//@access public

const updateUser = asyncHandler (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(201).json(updatedUser);
   // res.status(200).json({message : `Update Users for ${req.params.id}`});
});

//@desc Delete User
//@route DELETE /api/Users/:id
//@access public

const deleteUser = asyncHandler (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
});

//@desc Login User
//@route POST /api/Users/login/:id
//@access private

const loginUser = asyncHandler (async (req,res,next) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400);
        return next(new Error("All feilds are mandtory"));
    }
    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                id: user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1m"}
    );
        res.status(200).json({ accessToken })
    } else {
        res.status(401)
        return next(new Error("Email or Password is not valid"));
    }
    res.status(201).json("User logged in")
});

// @desc Signup User
// @route POST /api/Users/signup/:id
// @access public

const signupUser = asyncHandler(async (req, res, next) => {
    console.log("Request body : ", req.body);
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        return next(new Error("All fields are mandatory"));
    }
    const userUnavailable = await User.findOne({ email });
    if (userUnavailable) {
        res.status(400);
        return next(new Error("User already exists"));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password : ", hashedPassword);
    let user;
    try {
        user = await User.create({ username : username , email : email, password: hashedPassword });
    } catch (error) {
        console.log(error);
        res.status(500);
        return next(new Error("Internal server error"));
    }

    console.log(`User created  ${user}`);
    if (user) {
        res.status(201).json({ _id: user._id, email: user.email });
    } else {
        res.status(400);
        return next(new Error("User data was not valid"));
    }
    res.status(201).json("User signed up")
});

//@desc Current user info
//@route GET /api/Users/current
//@access private

const currentUser = asyncHandler(async (req, res, next) => {
    console.log("Current user information");
    
    //next();
});


const current = asyncHandler (async (req,res) => {
    console.log("Current user information");
});
// const dummy = asyncHandler(async (req, res, next) => {
//     await console.log("Dummy");
//     res.json({ message : "Dummy" });
//  next();
// });

//@desc Add Room
//@route POST /api/Users/rooms/:id
//@access public

const addRoom = asyncHandler (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const {roomId} = req.body;
  User.rooms.push(roomId).save();
    res.status(201).json(user);
});


//@desc Delete Room
//@route DELETE /api/Users/rooms/:id
//@access public

const deleteRoom = asyncHandler (async (req,res,next) => {
    const user = findModelById
    (User, req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const {roomId} = req.body;
    if (!roomId) {
        res.status(400);
        return next(new Error("Room not found"));
    }
    if (User.rooms.includes(roomId)) {
        res.status(404);
        return next(new Error("Room not found"));
    }
  User.rooms.pull(roomId).save();
    res.status(201).json(user);
});

//@desc Add Save
//@route POST /api/Users/saves/:id
//@access public

const addSave = asyncHandler (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const {saveId} = req.body;
    User.saves.push(saveId).save();
    res.status(201).json(user);
});

const deleteSave = asyncHandler (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const {saveId} = req.body;
    if (!saveId) {
        res.status(400);
        return next(new Error("Save not found"));
    }
    if (User.saves.includes(saveId)) {
        res.status(404);
        return next(new Error("Save not found"));
    }
  User.saves.pull(saveId).save();
    res.status(201).json(user);
});

//@desc Add Scan
//@route POST /api/Users/scans/:id
//@access public

const addScan = asyncHandler (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const {scanId} = req.body;
    User.scans.push(scanId).save();
    res.status(201).json(user);
});

//@desc Delete Scan
//@route DELETE /api/Users/scans/:id
//@access public

const deleteScan = asyncHandler (async (req,res,next) => {
    const user = findModelById
    (User, req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const {scanId} = req.body;
    if (!scanId) {
        res.status(400);
        return next(new Error("Scan not found"));
    }
    User.scans.pull(scanId).save();
    res.status(201).json(user);
}
);

//@desc Add Wishlist
//@route POST /api/Users/wishlist/:id
//@access public

const addWishlist = asyncHandler (async (req,res,next) => {
    const user = findModelById
    (User, req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const {wishlistId} = req.body;
    User.wishlist.push(wishlistId).save();
    res.status(201).json(user);
});

//@desc Delete Wishlist
//@route DELETE /api/Users/wishlist/:id
//@access public

const deleteWishlist = asyncHandler (async (req,res,next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(404);
        return next(new Error("User not found"));
    }
    const {wishlistId} = req.body;
    if (!wishlistId) {
        res.status(400);
        return next(new Error("Wishlist not found"));
    }
    if (User.wishlist.includes(wishlistId)) {
        res.status(404);
        return next(new Error("Wishlist not found"));
    }
  User.wishlist.pull(wishlistId).save();
    res.status(201).json(user);
});



module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, addRoom, deleteRoom, addSave, deleteSave, addScan, deleteScan, signupUser, addWishlist, deleteWishlist, loginUser, current};