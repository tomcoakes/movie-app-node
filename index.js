const http = require('http');

const port = 1337;
const hostname = '127.0.0.1';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Movie Database App');
}).listen(port, hostname, () => {
  console.log('The server is up. The magic happens on port 1337');
});
