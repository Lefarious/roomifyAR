const asyncHandler = require('express-async-handler');
const Room = require('../models/roomModel');

//@desc Get Room
//@route GET /api/Rooms/:id
//@access public

const getRoom = asyncHandler (async (req,res,next) => {
    const room = await Room.findById(req.params.id);
    if (!room) {
        res.status(404);
        return next(new Error("Room not found"));
    }
    res.status(200).json(room);
});

//@desc Get all Rooms
//@route GET /api/Rooms/
//@access public

const getRooms = asyncHandler (async (req,res) => {
    const rooms = await Room.find();
    res.status(200).json(rooms);
});

//@desc Create new Room
//@route POST /api/Rooms/

const createRoom = asyncHandler (async (req,res,next) => {
    console.log("Request body : ", req.body);
    const {name, userId} = req.body;
    if (!name || !userId){
        res.status(400);
        return next(new Error("All fields are mandatory"));
    }
    const room = await Room.create({ name, userId });
    res.status(201).json(room);
});

//@desc Update Room
//@route PUT /api/Rooms/:id
//@access public

const updateRoom = asyncHandler (async (req,res,next) => {
    const room = await Room.findById(req.params.id);
    if (!room) {
        res.status(404);
        return next(new Error("Room not found"));
    }
    console.log("Request body : ", req.body);
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(201).json(updatedRoom);
   // res.status(200).json({message : `Update Rooms for ${req.params.id}`});
});

//@desc Delete Room
//@route DELETE /api/Rooms/:id
//@access public

const deleteRoom = asyncHandler (async (req,res,next) => {
    const room = await Room.findById(req.params.id);
    if (!room) {
        res.status(404);
        return next(new Error("Room not found"));
    }
    await room.remove();
    res.status(200).json({message : `Room ${req.params.id} removed`});
});

module.exports = { getRoom, getRooms, createRoom, updateRoom, deleteRoom };

