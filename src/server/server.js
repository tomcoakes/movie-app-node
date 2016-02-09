const express = require('express');
const app = express();
const path = require('path');


const Routes = require('./routes');
app.set('views', 'src/client/views');
app.set('view engine', 'ejs');

module.exports = (movieService) => {
  const routes = new Routes(movieService);

  app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'Movie Database App'});
  });

  app.get('/movie', routes.getMovie());

  return app;
};
