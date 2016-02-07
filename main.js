const server = require('./src/server/server');

const port = 3000;

server()
  .listen(port, () => {
    console.log(`You can access the server on port: ${port}`);
  });
