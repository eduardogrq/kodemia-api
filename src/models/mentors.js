
const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
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
    },
    module: {
        type: String,
        enum : [ 'front', 'back', 'cloud', 'react' ], 
        require : true
    }
})

const model = mongoose.model('mentors', MentorSchema)

module.exports = model