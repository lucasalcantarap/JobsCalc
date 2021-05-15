const express = require('express');
const routes = express.Router()

const basePath = __dirname + "/views"
//request, e response
routes.get('/', (request, response) => response.sendFile(basePath + "/index.html"))
routes.get('/job', (request, response) => response.sendFile(basePath + "/job.html"))
routes.get('/job/edit', (request, response) => response.sendFile(basePath + "/job-edit.html"))
routes.get('/profile', (request, response) => response.sendFile(basePath + "/profile.html"))


//Joga o routes para fora
module.exports = routes;