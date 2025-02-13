
function findModelById(model, id) {
    return model.findById(id);
}

function isExists(object){
    if (!object){
        notFound(object);
    }
}

function isStored(object, array ){
    if (object[array].indexOf(id) === -1) {
        notFound(object);
    }
}

function notFound(object){
    res.status(404);
    return next(new Error(`${object} not found`));
}

module.exports = { findModelById, isExists, isStored, notFound };

    
