const express = require('express');
const router = express.Router();
const {getCommercialFurnitures, getCommercialFurniture, createCommercialFurniture, updateCommercialFurniture, deleteCommercialFurniture, addVariation, deleteVariation} = require('../controllers/commercialFurnitureController');

router.route('/').get(getCommercialFurnitures).post(createCommercialFurniture);

router.route('/:id').get(getCommercialFurniture).put(updateCommercialFurniture).delete(deleteCommercialFurniture);

router.route('/variation/:id').post(addVariation).delete(deleteVariation);

//router.route('/rating/:id').post(addRating);

module.exports = router;