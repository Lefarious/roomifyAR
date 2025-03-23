const asyncHandler = require('express-async-handler');
const IndieFurnitureModel = require('../models/indieFurnitureModel');

//@desc Get IndieFurnitureModel
//@route GET /api/IndieFurnitureModels/:id
//@access public

const getIndieFurnitureModel = asyncHandler (async (req,res,next) => {
    const indieFurnitureModel = await IndieFurnitureModel.findById(req.params.id);
    if (!indieFurnitureModel) {
        res.status(404);
        return next(new Error("IndieFurnitureModel not found"));
    }
    res.status(200).json(indieFurnitureModel);
}
);

//@desc Get all IndieFurnitureModels
//@route GET /api/IndieFurnitureModels/
//@access public



module.exports = {getIndieFurnitureModel, getIndieFurnitureModels, createIndieFurnitureModel, updateIndieFurnitureModel, deleteIndieFurnitureModel};
