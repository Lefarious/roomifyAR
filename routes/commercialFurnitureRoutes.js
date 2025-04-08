const express = require('express');
const router = express.Router();
const {getCommercialFurnitureModels, getCommercialFurnitureModel, createCommercialFurnitureModel, updateCommercialFurnitureModel, deleteCommercialFurnitureModel, addVariant, deleteVariant} = require('../controllers/commercialFurnitureController');

router.route('/').get(getCommercialFurnitureModels).post(createCommercialFurnitureModel);

//router.route('/variation/:id').post(addVariant).delete(deleteVariant);

router.route('/:id').get(getCommercialFurnitureModel).put(updateCommercialFurnitureModel).delete(deleteCommercialFurnitureModel);

//router.route('/rating/:id').post(addRating);

module.exports = router;