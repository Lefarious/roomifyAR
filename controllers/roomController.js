const asyncHandler = require('express-async-handler');
const Room = require('../models/roomModel');



//@desc Add Furniture to Room
//@route POST /api/Rooms/furniture/:id
//@access public

const addFurniture = asyncHandler (async (req,res,next) => {
    const room = await Room.findById(req.params.id);
    if (!room) {
        res.status(404);
        return next(new Error("Room not found"));
    }
    const {furniture} = req.body;
    if (!furniture) {
        res.status(400);
        return next(new Error("Furniture not found"));
    }
    const updatedRoom = await room.furniture.push(furniture).save();
    res.status(201).json(updatedRoom);
});

//@desc Delete Furniture from Room
//@route DELETE /api/Rooms/furniture/:id
//@access public

const deleteFurniture = asyncHandler (async (req,res,next) => {
    const room = await Room.findById(req.params.id);
    if (!room) {
        res.status(404);
        return next(new Error("Room not found"));
    }
    const {furniture} = req.body;
    if (!furniture) {
        res.status(400);
        return next(new Error("Furniture not found"));
    }
    if(room.furniture.includes(furniture)){
        res.status(400);
        return next(new Error("Furniture not found in Room"));
    }
    const updatedRoom = await room.furniture.pull(furniture).save();
    res.status(201).json(updatedRoom);
});



module.exports = { getRoom, getRooms, createRoom, updateRoom, deleteRoom , addFurniture, deleteFurniture};

