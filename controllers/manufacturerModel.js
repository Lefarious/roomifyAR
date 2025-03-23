const asyncHandler = require('express-async-handler');
const ManufacturerModel = require('../models/manufacturerModel');

//@desc Get ManufacturerModel
//@route GET /api/ManufacturerModels/:id
//@access public

const getManufacturerModel = asyncHandler (async (req,res,next) => {
    const manufacturerModel = await ManufacturerModel.findById(req.params.id);
    if (!manufacturerModel) {
        res.status(404);
        return next(new Error("ManufacturerModel not found"));
    }
    res.status(200).json(manufacturerModel);
}
);
