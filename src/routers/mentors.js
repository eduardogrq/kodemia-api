
const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async(request, response) => {
    try{
        const allMentors = await mentors.getAll()

        response.json({
            succes: true,
            message: 'All mentors',
            data:{
                mentors: allMentors
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at get all mentors',
            error: error.message
        })
    }
})

router.post('/', async(request, response) => {
    try{
        const mentorCreated = await mentors.create(request.body)
        response.json({
            succes: true,
            message: 'mentor created',
            data:{
                mentor: mentorCreated
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at create mentor',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params
        const mentorDeleted = await mentors.deleteById(id)

        response.json({
            succes: true,
            message: 'mentor deleted',
            data:{
                data: mentorDeleted
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at delete mentor',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try{
        const {id} = request.params
        const mentorUpdated = await mentors.updateById(id, request.body)

        response.json({
            succes: true,
            message: 'mentor updated',
            data:{
                data: mentorUpdated
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            succes: false,
            message: 'Error at update mentor',
            error: error.message
        })
    }
})

module.exports = router