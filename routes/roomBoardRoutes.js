const express = require('express');
const router = express.Router();
const {getRoomBoards, getRoomBoard, createRoomBoard, updateRoomBoard, deleteRoomBoard} = require('../controllers/roomBoardController');

router.route('/').get(getRoomBoards).post(createRoomBoard);

router.route('/:id').get(getRoomBoard).put(updateRoomBoard).delete(deleteRoomBoard);

module.exports = router;
