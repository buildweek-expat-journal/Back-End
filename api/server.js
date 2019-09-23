const express = require('express')
const configureMiddleware = require('./middleware')


const server = express()

configureMiddleware(server)

server.get('/', (req, res) => {
  res.send(`<h2>PORT LIVE</h2>`)
})

module.exports = server;