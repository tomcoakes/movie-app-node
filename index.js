const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Movie Database App');
}).listen(1337, '127.0.0.1', () => {
  console.log('The server is up. The magic happens on port 1337');
});
