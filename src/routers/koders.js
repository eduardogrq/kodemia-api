
const express = require('express')
const koders = require('../usecases/koders')
const authMiddlewares = require('../middlewares/auth')

const router = express.Router()

// router.use(authMiddlewares)

router.get('/', authMiddlewares.auth, async(request, response) => {
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

router.post('/', authMiddlewares.authRoles(['admin']), async(request, response) => {
    try{
        const koderCreated = await koders.create(request.body)
        response.json({
            succes: true,
            message: 'koder created',
            data:{
                koder: koderCreated
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at create koder',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params
        const koderDeleted = await koders.deleteById(id)

        response.json({
            succes: true,
            message: 'koder deleted',
            data:{
                data: koderDeleted
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at delete koder',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try{
        const {id} = request.params
        const koderUpdated = await koders.updateById(id, request.body)

        response.json({
            succes: true,
            message: 'koder updated',
            data:{
                data: koderUpdated
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at update koder',
            error: error.message
        })
    }
})

module.exports = router