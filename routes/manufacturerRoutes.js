const express = require('express');
const router = express.Router();
const {getManufacturers, getManufacturer, createManufacturer, updateManufacturer, deleteManufacturer} = require('../controllers/manufacturerController');

router.route('/').get(getManufacturers).post(createManufacturer);

//router.route('/products/:id').get(addProduct).delete(deleteProduct);

router.route('/:id').get(getManufacturer).put(updateManufacturer).delete(deleteManufacturer);

module.exports = router;
