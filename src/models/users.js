
const mongoose = require('mongoose')


const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        minLenght: 2,
        maxLenght: 100,
        required: true
    },
    email: {
        type: String,
        match: /.+@.+\..+/,
        maxLenght: 100
    },
    password: {
        type: String,
        minLenght: 1,
        require: true
    },
    role: {
        type: [String],
        enum: ['admin', 'user'],
        minLenght: 1,
        required: true
    }
})

const model = mongoose.model('users', usersSchema)

module.exports = model