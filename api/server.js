const express = require('express')
const configureMiddleware = require('./middleware')

const photosRouter = require('../photos/photos-router')


const server = express()

configureMiddleware(server)

server.use('/api/photos', photosRouter)

server.get('/', (req, res) => {
  res.send(`<h2>PORT LIVE</h2>`)
})

module.exports = server;