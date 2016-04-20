const express = require('express');
const app = express();
const path = require('path');


const Routes = require('./routes');
app.set('views', 'src/client/views');
app.set('view engine', 'ejs');

module.exports = (movieService, searchService) => {
  const routes = new Routes(movieService, searchService);

  app.get('/', (req, res) => {
    res.render('index', {title: 'Movie Database App'});
  });

  app.get('/movie', routes.getMovie());

  app.get('/search', routes.searchForMovie());

  return app;
};
