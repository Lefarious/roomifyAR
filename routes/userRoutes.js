const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler');
const {getUsers, getUser, createUser, updateUser, deleteUser, addSave, deleteSave, addRoom, deleteRoom, addWishlist, deleteWishlist, addScan, deleteScan, signupUser, loginUser, current} = require('../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

router.route('/login').post(validateToken,loginUser);

router.route('/signup').post(signupUser);

//router.route('/current').get(validateToken,current);   Pls fix this. Spent 6 hours on this.

router.route('rooms/:id').post(addRoom).delete(deleteRoom);

router.route('saves/:id').post(addSave).delete(deleteSave);

router.route('wishlist/:id').post(addWishlist).delete(deleteWishlist);

router.route('scans/:id').post(addScan).delete(deleteScan);

module.exports = router;