const express = require('express');
const helmet = require('helmet');

const server = express();

server
    .use(helmet())
    .use(express.json());

    server.get("/", (req, res) => {
        res.send("Server is running....")
    })   
module.exports = server;