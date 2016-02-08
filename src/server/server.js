const express = require('express');
const app = express();
const path = require('path');


const Routes = require('./routes');
const viewsPath = path.resolve('src/client/views');

module.exports = (getMovieService) => {
  const routes = new Routes(getMovieService);

  app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath + '/index.html'));
  });

  app.get('/movie', routes.getMovie());

  return app;
};
