const express = require('express');
const router = express.Router();
const {getRoomBoards, getRoomBoard, createRoomBoard, updateRoomBoard, deleteRoomBoard, addModel, deleteModel, addModelAnchor, deleteModelAnchor, addSaved, deleteSaved, addLike, removeLike, addShare} = require('../controllers/roomBoardController');

router.route('/').get(getRoomBoards).post(createRoomBoard);

router.route('/model/:id').post(addModel).delete(deleteModel);

router.route('/modelAnchor/:id').post(addModelAnchor).delete(deleteModelAnchor);

router.route('/saved/:id').post(addSaved).delete(deleteSaved);

router.route('/likes/:id').post(addLike).delete(removeLike);

route.route('shares/:id').post(addShare);

router.route('/:id').get(getRoomBoard).put(updateRoomBoard).delete(deleteRoomBoard);

module.exports = router;
