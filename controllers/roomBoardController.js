const asyncHandler = require('express-async-handler');
const RoomBoard = require('../models/roomBoardModel');



//@desc Add Model to RoomBoard
//@route POST /api/RoomBoards/model/:id
//@access public

const addModel = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    const {modelId} = req.body;
    if (!modelId) {
        res.status(400);
        return next(new Error("ModelId not found"));
    }
    const updatedRoomBoard = await roomBoard.models.push(modelId).save();
    res.status(201).json(roomBoard);
});

//@desc Delete Model from RoomBoard
//@route DELETE /api/RoomBoards/model/:id
//@access public

const deleteModel = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    const {modelId} = req.body;
    if (!modelId) {
        res.status(400);
        return next(new Error("ModelId not found"));
    }
    if (roomBoard.includes(modelId)){
        res.status(400);
        return next(new Error("Model not found in RoomBoard"));
    }
    updatedRoomBoard = await roomBoard.pull(modelId).save();
    res.status(201).json(updateRoomBoard);
});

//@desc Add Model Anchor to RoomBoard
//@route POST /api/RoomBoards/modelAnchor/:id
//@access public

const addModelAnchor = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    const {anchorId} = req.body;
    if (!anchorId) {
        res.status(400);
        return next(new Error("AnchorId not found"));
    }
    const updatedRoomBoard = await roomBoard.anchors.push(anchorId).save();
    res.status(201).json(roomBoard);
});

//@desc Delete Model Anchor from RoomBoard
//@route DELETE /api/RoomBoards/modelAnchor/:id
//@access public

const deleteModelAnchor = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    const {anchorId} = req.body;
    if (!anchorId) {
        res.status(400);
        return next(new Error("AnchorId not found"));
    }
    if (roomBoard.includes(anchorId)){
        res.status(400);
        return next(new Error("Anchor not found in RoomBoard"));
    }
    updatedRoomBoard = await roomBoard.pull(anchorId).save();
    res.status(201).json(updateRoomBoard);
});

//@desc Add Saved to RoomBoard
//@route POST /api/RoomBoards/saved/:id
//@access public

const addSaved = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    roomBoard.saved += 1;
    const updatedRoomBoard = await roomBoard.save();
    res.status(201).json(updateRoomBoard);
});

//@desc Delete Saved from RoomBoard
//@route DELETE /api/RoomBoards/saved/:id
//@access public

const deleteSaved = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    if (roomBoard.saved <= 0){
        res.status(400);
        return next(new Error("No saved to delete"));
    }
    roomBoard.saved -= 1;
    const updatedRoomBoard = await RoomBoard.save();
    res.status(201).json(updateRoomBoard);
}
);

//@desc Add Like to RoomBoard
//@route POST /api/RoomBoards/likes/:id
//@access public

const addLike = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    roomBoard.likes += 1;
    const updatedRoomBoard = await roomBoard.save();
    res.status(201).json(updateRoomBoard);
}
);

//@desc Remove Like from RoomBoard
//@route DELETE /api/RoomBoards/likes/:id
//@access public

const removeLike = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    if (roomBoard.likes <= 0){
        res.status(400);
        return next(new Error("No likes to delete"));
    }
    roomBoard.likes -= 1;
    const updatedRoomBoard = await RoomBoard.save();
    res.status(201).json(updatedRoomBoard);
}
);

//@desc Add Share to RoomBoard
//@route POST /api/RoomBoards/shares/:id
//@access public

const addShare = asyncHandler (async (req,res,next) => {
    const roomBoard = await RoomBoard.findById(req.params.id);
    if (!roomBoard) {
        res.status(404);
        return next(new Error("RoomBoard not found"));
    }
    roomBoard.shares += 1;
    const updatedRoomBoard = await roomBoard.save();
    res.status(201).json(updatedRoomBoard);
}
);

module.exports = { getRoomBoard, getRoomBoards, createRoomBoard, updateRoomBoard, deleteRoomBoard };


