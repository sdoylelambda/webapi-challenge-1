const express = require('express');
const server = express();

const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');

server.use(express.json())

server.use("/api/actions/", actionRouter)
server.use("/api/projects/", projectRouter)

server.get('/', (req, res) => {
    res.status(200).json({yo: 'its up'})
});

module.exports = server;