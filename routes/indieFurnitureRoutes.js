const express = require('express');
const router = express.Router();
const {getIndieFurnitures, getIndieFurniture, createIndieFurniture, updateIndieFurniture, deleteIndieFurniture} = require('../controllers/indieFurnitureController');

router.route('/').get(getIndieFurnitures).post(createIndieFurniture);

router.route('/:id').get(getIndieFurniture).put(updateIndieFurniture).delete(deleteIndieFurniture);

module.exports = router;