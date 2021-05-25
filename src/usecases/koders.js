

const Koders = require('../models/koders')

function getAll(){
    return Koders.find()
}

modeule.exports = {
    getAll
}