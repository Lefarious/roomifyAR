const asyncHandler = require('express-async-handler');
const RoomBoard = require('../models/roomBoardModel');

//@desc Get RoomBoard
//@route GET /api/RoomBoards/:id
//@access public

const getRoomBoard = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    res.status(200).json(roomBoard);
});

//@desc Get all RoomBoards
//@route GET /api/RoomBoards/
//@access public

const getRoomBoards = asyncHandler (async (req,res) => {
    const roomBoards = await RoomBoard.find();
    res.status(200).json(roomBoards);
});

//@desc Create new RoomBoard
//@route POST /api/RoomBoards/
//@access public

const createRoomBoard = asyncHandler (async (req,res,next) => {
    console.log("Request body : ", req.body);
    const {name, userId} = req.body;
    if (!name || !userId){
        res.status(400);
        return next(new Error("All fields are mandatory"));
    }
    const roomBoard = await RoomBoard.create({ name, userId });
    res.status(201).json(roomBoard);
}
);

//@desc Update RoomBoard
//@route PUT /api/RoomBoards/:id
//@access public

const updateRoomBoard = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    console.log("Request body : ", req.body);
    const updatedRoomBoard = await RoomBoard.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(201).json(updatedRoomBoard);
   // res.status(200).json({message : `Update RoomBoards for ${req.params.id}`});
}
);

//@desc Delete RoomBoard
//@route DELETE /api/RoomBoards/:id
//@access public

const deleteRoomBoard = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    await roomBoard.remove();
    res.status(200).json({message : `RoomBoard ${req.params.id} removed`});
}
);

module.exports = { getRoomBoard, getRoomBoards, createRoomBoard, updateRoomBoard, deleteRoomBoard };


