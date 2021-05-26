
const jwt = require('../lib/jwt')
const users = require('../usecases/users')

function auth(request, response, next) {
    try{
        const { authorization: token } = request.headers
    console.log('token: ', token)

    const isValidToken = jwt.verify(token)

    console.log('Is valid token: ', isValidToken)

    if(!isValidToken){
        throw new Error('Not Authorized')
    }
    next()

    } catch (error) {
        response.status(401),
        response.json({
            success: false,
            message: 'Could not login',
            error: error.message
        })
    }

    
}

function authRoles (allowedRoles){
    return async (request, response, next) => {
        try{
            const { authorization: token } = request.headers
        console.log('token: ', token)
    
        const isValidToken = jwt.verify(token)
    
        if(!isValidToken){
            throw new Error('Not Authorized')
        }

        const userFound = await users.getById(isValidToken.id)

        const userRoles = userFound.roles

        const isAllowedRole = userRoles.find(userRole => {
            return allowedRoles.find( allowedRole => userRole === allowedRoles )
        })

        if(!isAllowedRole) {
            throw new Error('Insufficent permissions')
        }

        next()
    
        } catch (error) {
            response.status(401),
            response.json({
                success: false,
                message: 'Could not login',
                error: error.message
            })
        }
    }
}

// token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYWQ4ZTgzNzI5MTUxMGRiZWIzNWY0YSIsImlhdCI6MTYyMTk5NDM5OCwiZXhwIjoxNjIxOTk3OTk4fQ.ObW8gU53vCRocPorktplbFPRlmpHtRs-jXmaHdeaCsI

module.exports = {
    auth,
    authRoles
}