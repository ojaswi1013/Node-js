const http = require('http');

const routes = require('./routes');

//const { Buffer } = require('buffer');
const server = http.createServer(routes);

server.listen(3000);