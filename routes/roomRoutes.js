const express = require('express');
const router = express.Router();
const {getRooms, getRoom, createRoom, updateRoom, deleteRoom, addFurniture, deleteFurniture} = require('../controllers/roomController');

router.route('/').get(getRooms).post(createRoom);

router.route('/furniture/:id').post(addFurniture).delete(deleteFurniture);

router.route('/:id').get(getRoom).put(updateRoom).delete(deleteRoom);


module.exports = router;
