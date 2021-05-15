const express = require("express")
const server = express()

//request, e response
server.get('/', (request, response) => {

    return response.send('Oie!!')
})

server.listen(3000, () => console.log('rodando') )