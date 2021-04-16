const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('*', (req,res) => {
    res.send(`<h3>Ye'v got a fine vessel ready to sail</h3>`);
});

module.exports = server;
