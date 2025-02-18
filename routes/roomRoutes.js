const express = require('express');
const router = express.Router();
const {getRooms, getRoom, createRoom, updateRoom, deleteRoom, addFurniture, deleteFurniture} = require('../controllers/roomController');

router.route('/').get(getRooms).post(createRoom);

router.route('/:id').get(getRoom).put(updateRoom).delete(deleteRoom);

router.route('/furniture/:id').post(addFurniture).delete(deleteFurniture);

module.exports = router;
