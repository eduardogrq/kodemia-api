
const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

router.get('/', async(request, response) => {
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

module.exports = router