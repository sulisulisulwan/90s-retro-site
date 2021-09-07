const http = require('http');
const requestHandler = require('./handler')
const hostname = 'localhost';
const port = 1337;
const server = http.createServer(requestHandler)

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});

