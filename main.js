const movieService = require('./src/server/services/movieService');
const searchService = require('./src/server/services/searchService');
const app = require('./src/server/server');

const port = 3000;

app(movieService, searchService)
  .listen(port, () => {
    console.log(`You can access the server on port: ${port}`);
  });
