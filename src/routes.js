const express = require('express'); //bibliotecA para criar os servidor
const routes = express.Router() // parte do express que cria roras ou caminhos

const views = __dirname + "/views/" //trouxe o views oara o diretorio

const profile = {
    name: "Lucas",
    avatar: "https://github.com/lucasalcantarap.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5, 
    "vacation-per-year": 4
}


const jobs = [
    {
        id:1,
        name:"Pizzaria Guloso",
        "daily-hours":2, 
        "total-hours": 60,
        created_at: Date.now(),
    },
    {
        id:2,
        name:"OneTwo Project",
        "daily-hours":3, 
        "total-hours": 47,
        created_at: Date.now(),
    }
]

//req, e res
//O ejs jasabe que o arquivo esta na pasta views
routes.get('/', (req, res) => {
    //ajustes no job 
    //calculo de tempo restante 
    const remainingDays = 
    
    
   

    return res.render(views + "/index", { jobs })

})









routes.get('/job', (req, res) => res.render(views + "/job"))
routes.post('/job', (req, res) => {
//req.body = {name:'SiteBemake', 'daily-hours:'5', 'total-hours':'3'}
    const lastID = jobs[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastID + 1,
        name:req.body.name,
        "daily-hours":req.body["dayly-hours"], 
        "total-hours": req.body["total-hours"],
        created_at: Date.now() //atribuindo data de hoje
         
})
return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile", { profile }))


//Joga o routes para fora
module.exports = routes;