const express = require('express');
const router = express.Router();
const {getCommercialFurnitures, getCommercialFurniture, createCommercialFurniture, updateCommercialFurniture, deleteCommercialFurniture} = require('../controllers/commercialFurnitureController');

router.route('/').get(getCommercialFurnitures).post(createCommercialFurniture);

router.route('/:id').get(getCommercialFurniture).put(updateCommercialFurniture).delete(deleteCommercialFurniture);

module.exports = router;