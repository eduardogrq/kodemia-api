
const mongoose = require('mongoose')

const KoderSchema = new mongoose.Schema({
    name: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true
    },
    lastName: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 99,
        require: true
    },
    gender: {
        type: String,
        maxLenght: 1,
        required: true,
        enum:['m', 'f'],
        required: true
    }
})

const model = mongoose.model('koders', KoderSchema)

module.exports = model