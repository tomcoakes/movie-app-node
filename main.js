const getMovieService = require('./src/server/services/getMovieService');
const app = require('./src/server/server');

const port = 3000;

app(getMovieService)
  .listen(port, () => {
    console.log(`You can access the server on port: ${port}`);
  });
