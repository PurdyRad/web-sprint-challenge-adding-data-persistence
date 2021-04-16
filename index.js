const server = require('./api/server');

const PORT = 7110;

server.listen(PORT, () => {
    console.log(`Ye parrot be listening on port ${PORT}`);
});
