

const Koders = require('../models/koders')

function getAll(){
    return Koders.find()
}

function create(koder) {
    return Koders.create(koder)
}

function deleteById (id) {
    return Koders.findByIdAndDelete(id)
}

function updateById(id, dataToUpdate) {
    return Koders.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}