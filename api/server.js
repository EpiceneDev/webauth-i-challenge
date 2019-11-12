const express = require('express');
// const helmet = require('helmet');
// const cors = require('cors');
// const sessions = require('express-session');

const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware.js');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

module.exports = server;
