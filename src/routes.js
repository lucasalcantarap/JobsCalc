const express = require('express');
const routes = express.Router()

//request, e response
routes.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})

//Joga o routes para fora
module.exports = routes;