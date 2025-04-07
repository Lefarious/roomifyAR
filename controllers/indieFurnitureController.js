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

const getIndieFurnitureModels = asyncHandler (async (req,res) => {
    const indieFurnitureModels = await IndieFurnitureModel.find();
    res.status(200).json(indieFurnitureModels);
}
);

//@desc Create new IndieFurnitureModel
//@route POST /api/IndieFurnitureModels/
//@access public

const createIndieFurnitureModel = asyncHandler (async (req,res,next) => {
    console.log("Request body : ", req.body);
    const {name, userId} = req.body;
    if (!name || !userId){
        res.status(400);
        return next(new Error("All fields are mandatory"));
    }
    const indieFurnitureModel = await IndieFurnitureModel.create({ name, userId });
    res.status(201).json(indieFurnitureModel);
}
);

//@desc Update IndieFurnitureModel
//@route PUT /api/IndieFurnitureModels/:id
//@access public

const updateIndieFurnitureModel = asyncHandler (async (req,res,next) => {
    const indieFurnitureModel = await IndieFurnitureModel.findById(req.params.id);
    if (!indieFurnitureModel) {
        res.status(404);
        return next(new Error("IndieFurnitureModel not found"));
    }
    console.log("Request body : ", req.body);
    const updatedIndieFurnitureModel = await IndieFurnitureModel.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(201).json(updatedIndieFurnitureModel);
   // res.status(200).json({message : `Update IndieFurnitureModels for ${req.params.id}`});
}
);

//@desc Delete IndieFurnitureModel
//@route DELETE /api/IndieFurnitureModels/:id
//@access public

const deleteIndieFurnitureModel = asyncHandler (async (req,res,next) => {
    const indieFurnitureModel = await IndieFurnitureModel.findById(req.params.id);
    if (!indieFurnitureModel) {
        res.status(404);
        return next(new Error("IndieFurnitureModel not found"));
    }
    await indieFurnitureModel.remove();
    res.status(200).json({message : `Delete IndieFurnitureModel for ${req.params.id}`});
}
);

module.exports = {getIndieFurnitureModel, getIndieFurnitureModels, createIndieFurnitureModel, updateIndieFurnitureModel, deleteIndieFurnitureModel};
