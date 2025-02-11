const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

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
    const User = await User.findById(req.params.id);
    if (!User) {
        res.status(404);
        return next(new Error("User not found"));
    }
    console.log("Request body : ", req.body);
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(201).json(updatedUser);
   // res.status(200).json({message : `Update Users for ${req.params.id}`});
});

//@desc Delete User
//@route DELETE /api/Users/:id
//@access public

const deleteUser = asyncHandler (async (req,res,next) => {
    const User = await User.findById(req.params.id);
    if (!User) {
        res.status(404);
        return next(new Error("User not found"));
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json(User);
});

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser};