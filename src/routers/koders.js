
const express = require('express')
const { router } = require('../server')
const koders = require('../usecases/koders')

const rounter = express.Router()

router.get('/', (request, response) => {
    try{
        const allKoders = await koders.getAll()

        response.json({
            succes: true,
            message: 'All koders',
            data:{
                koders: allKoders
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
})