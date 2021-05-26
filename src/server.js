
// Este archivo aloja la definición de nuestro servidor.

const express = require('express')

const cors = require('cors')

const kodersRouter = require('./routers/koders')
const usersRoter = require('./routers/users')
const mentorsRouter = require('./routers/mentors')

const logger = require('./middlewares/logger')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use('/koders', kodersRouter)
app.use('/users', usersRoter)
app.use('/mentors', mentorsRouter)

module.exports = app

