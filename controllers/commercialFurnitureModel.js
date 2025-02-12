const asyncHandler = require('express-async-handler');
const CommercialFurnitureModel = require('../models/commercialFurnitureModel');

//@desc Get CommercialFurnitureModel
//@route GET /api/CommercialFurnitureModels/:id
//@access public

const getCommercialFurnitureModel = asyncHandler (async (req,res,next) => {
    const commercialFurnitureModel = await CommercialFurnitureModel.findById(req.params.id);
    if (!commercialFurnitureModel) {
        res.status(404);
        return next(new Error("CommercialFurnitureModel not found"));
    }
    res.status(200).json(commercialFurnitureModel);
}
);

//@desc Get all CommercialFurnitureModels
//@route GET /api/CommercialFurnitureModels/
//@access public

const getCommercialFurnitureModels = asyncHandler (async (req,res) => {
    const commercialFurnitureModels = await CommercialFurnitureModel.find();
    res.status(200).json(commercialFurnitureModels);
});

//@desc Create new CommercialFurnitureModel
//@route POST /api/CommercialFurnitureModels/
//@access public

const createCommercialFurnitureModel = asyncHandler (async (req,res,next) => {
    console.log("Request body : ", req.body);
    const {name, userId} = req.body;
    if (!name || !userId){
        res.status(400);
        return next(new Error("All fields are mandatory"));
    }
    const commercialFurnitureModel = await CommercialFurnitureModel.create({ name, userId });
    res.status(201).json(commercialFurnitureModel);
}
);

//@desc Update CommercialFurnitureModel
//@route PUT /api/CommercialFurnitureModels/:id
//@access public

const updateCommercialFurnitureModel = asyncHandler (async (req,res,next) => {
    const commercialFurnitureModel = await CommercialFurnitureModel.findById(req.params.id);
    if (!commercialFurnitureModel) {
        res.status(404);
        return next(new Error("CommercialFurnitureModel not found"));
    }
    console.log("Request body : ", req.body);
    const updatedCommercialFurnitureModel = await CommercialFurnitureModel.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.status(201).json(updatedCommercialFurnitureModel);
   // res.status(200).json({message : `Update CommercialFurnitureModels for ${req.params.id}`});
}
);

//@desc Delete CommercialFurnitureModel
//@route DELETE /api/CommercialFurnitureModels/:id
//@access public

const deleteCommercialFurnitureModel = asyncHandler (async (req,res,next) => {
    const commercialFurnitureModel = await CommercialFurnitureModel.findById(req.params.id);
    if (!commercialFurnitureModel) {
        res.status(404);
        return next(new Error("CommercialFurnitureModel not found"));
    }
    await commercialFurnitureModel.remove();
    res.status(200).json({message : `CommercialFurnitureModel ${req.params.id} removed`});
}
);

module.exports = {getCommercialFurnitureModel, getCommercialFurnitureModels, createCommercialFurnitureModel, updateCommercialFurnitureModel, deleteCommercialFurnitureModel};
