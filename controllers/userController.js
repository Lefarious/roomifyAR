const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const { findModelById, isExists } = require("../middleware/controllerUtilty.js");

//@desc Get User
//@route GET /api/Users/:id
//@access public

const getUser = asyncHandler (async (req,res,next) => {
    const user = findModelById(User, req.params.id);
    await isExists(user);
    res.status(200).json(user);
});

//@desc Get all Users
//@route GET /api/Users/
//@access public

const getUsers = asyncHandler (async (req,res) => {
    const Users = await User.find();
    res.status(200).json(Users);
});

//@desc Create new User
//@route POST /api/Users
//@access public

const createUser = asyncHandler (async (req,res,next) => {
    console.log("Request body : ", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        return next(new Error("All fields are mandatory"));
    }
    const User = await User.create({ name, email, phone });
    res.status(201).json(User);
});

//@desc Update User
//@route PUT /api/Users/:id
//@access public

const updateUser = asyncHandler (async (req,res,next) => {
    const User = findModelById(User, req.params.id);
    isExists(user);
    console.log("Request body : ", req.body);
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(201).json(updatedUser);
   // res.status(200).json({message : `Update Users for ${req.params.id}`});
});

//@desc Delete User
//@route DELETE /api/Users/:id
//@access public

const deleteUser = asyncHandler (async (req,res,next) => {
    const User = findModelById(User, req.params.id);
    isExists(user);
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json(User);
});

//@desc Login User
//@route POST /api/Users/login/:id
//@access public

// const loginUser = asyncHandler (async (req,res,next) => {
//     const User = findModelById(User, req.params.id);
// });

//@desc Signup User
//@route POST /api/Users/signup/:id
//@access public

// const signupUser = asyncHandler (async (req,res,next) => {
//     const User = findModelById(User, req.params.id);
// });

//@desc Add Room
//@route POST /api/Users/rooms/:id
//@access public

const addRoom = asyncHandler (async (req,res,next) => {
    const User = findModelById(User, req.params.id);
    isExists(user);
    const {roomId} = req.body;
    User.rooms.push(roomId).save();
    res.status(201).json(User);
});

const deleteRoom = asyncHandler (async (req,res,next) => {
    const User = findModelById
    (User, req.params.id);
    isExists(user);
    const {roomId} = req.body;
    isExists(roomId);
    if (User.rooms.indexOf(roomId) === -1) {
        res.status(404);
        return next(new Error("Room not found"));
    }
    User.rooms.pull(roomId).save();
    res.status(201).json(User);
});

//@desc Add Save
//@route POST /api/Users/saves/:id
//@access public

const addSave = asyncHandler (async (req,res,next) => {
    const User = findModelById
    (User, req.params.id);
    isExists(user);
    const {saveId} = req.body;
    User.saves.push(saveId).save();
    res.status(201).json(User);
});

const deleteSave = asyncHandler (async (req,res,next) => {
    const User = findModelById
    (User, req.params.id);
    await isExists(user);
    const {saveId} = req.body;
    await isExists(saveId);
    await isStored(saveId, User.saves);
    User.saves.pull(saveId).save();
    res.status(201).json(User);
});

//@desc Add Scan
//@route POST /api/Users/scans/:id
//@access public

const addScan = asyncHandler (async (req,res,next) => {
    const User = findModelById
    (User, req.params.id);
    isExists(user);
    const {scanId} = req.body;
    User.scans.push(scanId).save();
    res.status(201).json(User);
});

//@desc Delete Scan
//@route DELETE /api/Users/scans/:id
//@access public

const deleteScan = asyncHandler (async (req,res,next) => {
    const User = findModelById
    (User, req.params.id);
    isExists(user);
    const {scanId} = req.body;
    isStored(scanId, User.scans);
    User.scans.pull(scanId).save();
    res.status(201).json(User);
}
);

//@desc Add Wishlist
//@route POST /api/Users/wishlist/:id
//@access public

const addWishlist = asyncHandler (async (req,res,next) => {
    const User = findModelById
    (User, req.params.id);
    isExists(user);
    const {wishlistId} = req.body;
    User.wishlist.push(wishlistId).save();
    res.status(201).json(User);
});

//@desc Delete Wishlist
//@route DELETE /api/Users/wishlist/:id
//@access public

const deleteWishlist = asyncHandler (async (req,res,next) => {
    const User = findModelById
    (User, req.params.id);
    isExists(user);
    const {wishlistId} = req.body;
    isExists(wishlistId);
    isStored(wishlistId, User.wishlist);
    User.wishlist.pull(wishlistId).save();
    res.status(201).json(User);
});



module.exports = { getUsers, getUser, createUser, updateUser, deleteUser};