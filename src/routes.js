const express = require('express'); //bibliotecA para criar os servidor
const routes = express.Router() // parte do express que cria roras ou caminhos

const views = __dirname + "/views/" //trouxe o views oara o diretorio

//req, e res
//O ejs jasabe que o arquivo esta na pasta views
routes.get('/', (req, res) => res.render(views + "/index"))
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.get('/job/edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile"))


//Joga o routes para fora
module.exports = routes;