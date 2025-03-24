const express = require('express');
const router = express.Router();
const {getManufacturerFurnitures, getManufacturerFurniture, createManufacturerFurniture, updateManufacturerFurniture, deleteManufacturerFurniture, addProduct, deleteProduct} = require('../controllers/manufacturerFurnitureController');

router.route('/').get(getManufacturerFurnitures).post(createManufacturerFurniture);

router.route('/products/:id').get(addProduct).delete(deleteProduct);

router.route('/:id').get(getManufacturerFurniture).put(updateManufacturerFurniture).delete(deleteManufacturerFurniture);

module.exports = router;
