const asyncHandler = require('express-async-handler');
const CommercialFurnitureModel = require('../models/commercialFurnitureModel');



//@desc Add Variant to CommercialFurnitureModel
//@route POST /api/CommercialFurnitureModels/:id/variants
//@access public

const addVariant = asyncHandler (async (req,res,next) => {
    const commercialFurnitureModel = await CommercialFurnitureModel.findById(req.params.id);
    if (!commercialFurnitureModel) {
        res.status(404);
        return next(new Error("CommercialFurnitureModel not found"));
    }
    const {variant} = req.body;
    if (!variant) {
        res.status(400);
        return next(new Error("Variant is mandatory"));
    }
    const updateCommercialFurniture = commercialFurnitureModel.variants.push(variant);
    await updateCommercialFurniture.save();
    res.status(201).json(updateCommercialFurniture);
}
);

//@desc Delete Variant from CommercialFurnitureModel
//@route DELETE /api/CommercialFurnitureModels/:id/variants/:variantId
//@access public

const deleteVariant = asyncHandler (async (req,res,next) => {
    const commercialFurnitureModel = await CommercialFurnitureModel.findById(req.params.id);
    if (!commercialFurnitureModel) {
        res.status(404);
        return next(new Error("CommercialFurnitureModel not found"));
    }
    const variant = commercialFurnitureModel.variants.find(v => v._id == req.params.variantId);
    if (!variant) {
        res.status(404);
        return next(new Error("Variant not found"));
    }
    if (!CommercialFurnitureModel.variants){
        res.status(404);
        return next(new Error("No variants found"));
    }
    const upDatedCommercialFurnitureModel = commercialFurnitureModel.variants.pull(variant);
    await upDatedCommercialFurnitureModel.save();
    res.status(200).json(commercialFurnitureModel);
}
);

module.exports = {getCommercialFurnitureModel, getCommercialFurnitureModels, createCommercialFurnitureModel, updateCommercialFurnitureModel, deleteCommercialFurnitureModel};
