const express = require("express")
const server = express()

server.get('/', () => {
    console.log('entrei no index')
})

server.listen(3000, () => console.log('rodando') )