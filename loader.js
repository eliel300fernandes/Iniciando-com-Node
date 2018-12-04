const port = 3000;

//middleware: interpretar o corpo da requisição
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// interpretar os dados ao submeter o formulário
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(port, function(){
  console.log('backendweb is running on port {port}.')
})

server.use(function(req, res, next){
  console.log('meu 1° middleware')
  next()
})
server.use(function (req, res, next){
  console.log('meu 2° middleware')
  res.send('Funcionou novamente')
})
