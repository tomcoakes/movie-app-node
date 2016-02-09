const movieService = require('./src/server/services/movieService');
const app = require('./src/server/server');

const port = 3000;

app(movieService)
  .listen(port, () => {
    console.log(`You can access the server on port: ${port}`);
  });
