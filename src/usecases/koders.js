

const Koders = require('../models/koders')

function getAll(){
    return Koders.find()
}

function create({name, lastName, age, gender}) {
    return Koders.create({name, lastName, age, gender})
}

function deleteById (id) {
    return Koders.findByIdAndDelete(id)
}

module.exports = {
    getAll,
    create,
    deleteById
}