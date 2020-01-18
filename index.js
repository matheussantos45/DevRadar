const porta = 3000
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://Matheus:matheus9381@cluster0-shard-00-00-mer9m.mongodb.net:27017,cluster0-shard-00-01-mer9m.mongodb.net:27017,cluster0-shard-00-02-mer9m.mongodb.net:27017/DevRadar?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(porta, () => {
  console.log('O servidor esta rodando')
})
