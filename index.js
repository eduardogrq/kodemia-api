
const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
    .then(() => {
        console.log('DB Connected')
        server.listen(8080, () => {
            console.log('Server listening')
        })
    })
    .catch((error) => {
        console.log('error: ', error)
    })

// GET /koders
// 1.- Crear (o asegurarse de que exista) el Modelo necesario
// 2.- Crear el caso de uso necesario
// 3.- Crear el endpoint necesario
 
// POST
// DELETE
// PATCH