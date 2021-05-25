

const Koders = require('../models/koders')

function getAll(){
    return Koders.find()
}

module.exports = {
    getAll
}