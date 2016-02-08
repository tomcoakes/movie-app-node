const getMovieService = require('./src/server/services/getMovieService');
const server = require('./src/server/server');

const port = 3000;

server(getMovieService)
  .listen(port, () => {
    console.log(`You can access the server on port: ${port}`);
  });
