
const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll() {
    return Users.find()
}

function getById(id){
    return Users.findById(id)
}

async function signUp ({ name, email, password, role }) {

    const userFound = await Users.findOne( {email} )

    if(userFound){
        throw new Error('User already exists')
    }

    const encriptedPassword = await bcrypt.hash(password)

    return Users.create({
        name, 
        email, 
        password: encriptedPassword, role
    })

}

async function login (email, password){

    // Email debe de ser un objeto
    const userFound = await Users.findOne( {email} )

    if(!userFound){
        throw new Error('Invalid data')
    }

    const isValidPassword = await bcrypt.compare(password, userFound.password)

    if(!isValidPassword){
        throw new Error('Invalid data')
    }

    return jwt.sign({ id: userFound._id })

}

module.exports = {
    getAll,
    signUp,
    login,
    getById
}



