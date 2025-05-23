const asyncHandler = require('express-async-handler');
const ManufacturerModel = require('../models/manufacturerModel');

//@desc Get ManufacturerModel
//@route GET /api/ManufacturerModels/:id
//@access public

const getManufacturer = asyncHandler (async (req,res,next) => {
    const manufacturerModel = await ManufacturerModel.findById(req.params.id);
    if (!manufacturerModel) {
        res.status(404);
        return next(new Error("ManufacturerModel not found"));
    }
    res.status(200).json(manufacturerModel);
}
);
//@desc Get all ManufacturerModels
//@route GET /api/ManufacturerModels/
//@access public

const getManufacturers = asyncHandler (async (req,res) => {
    const manufacturerModels = await ManufacturerModel.find();
    res.status(200).json(manufacturerModels);
}
);
//@desc Create new ManufacturerModel
//@route POST /api/ManufacturerModels/
//@access public

const createManufacturer = asyncHandler (async (req,res,next) => {
    console.log("Request body : ", req.body);
    const {name, userId} = req.body;
    if (!name || !userId){
        res.status(400);
        return next(new Error("All fields are mandatory"));
    }
    const manufacturerModel = await ManufacturerModel.create({ name, userId });
    res.status(201).json(manufacturerModel);
}
);
//@desc Update ManufacturerModel
//@route PUT /api/ManufacturerModels/:id
//@access public

const updateManufacturer = asyncHandler (async (req,res,next) => {
    const manufacturerModel = await ManufacturerModel.findById(req.params.id);
    if (!manufacturerModel) {
        res.status(404);
        return next(new Error("ManufacturerModel not found"));
    }
    console.log("Request body : ", req.body);
    const updatedManufacturerModel = await ManufacturerModel.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(201).json(updatedManufacturerModel);
   // res.status(200).json({message : `Update ManufacturerModels for ${req.params.id}`});
}
);
//@desc Delete ManufacturerModel
//@route DELETE /api/ManufacturerModels/:id
//@access public

const deleteManufacturer = asyncHandler (async (req,res,next) => {
    const manufacturerModel = await ManufacturerModel.findById(req.params.id);
    if (!manufacturerModel) {
        res.status(404);
        return next(new Error("ManufacturerModel not found"));
    }
    await manufacturerModel.remove();
    res.status(200).json({message : `ManufacturerModel ${req.params.id} removed`});
}
);

module.exports = {getManufacturer, getManufacturers, createManufacturer, updateManufacturer, deleteManufacturer};
