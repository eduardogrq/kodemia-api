
// Este archivo aloja la definición de nuestro servidor.

const express = require('express')
const kodersRouter = require('./routers/koders')
const app = express()

app.use('/koders', kodersRouter)

module.exports = app

