const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
// const apiRouter = require('./api-router.js');
// const configureMiddleware = require('./configure-middleware.js');

const server = express();

// configureMiddleware(server);

const sessionConfig = {
    name: "Mel",
    secret: process.env.COOKIE_SECRET || "is it secret? is it safe?",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: process.env.NODE_ENV === "development" ? false : true,
        httpOnly: true
    }
};

server
    .use(helmet())
    .use(express.json())
    .use(cors())
    .use(session(sessionConfig));

    // .use('/api', apiRouter)
server
    .use('/api/auth', authRouter)
    .use('/api/users', usersRouter);

module.exports = server;
