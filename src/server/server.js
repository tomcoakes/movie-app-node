const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes')();
const viewsPath = path.resolve('src/client/views');

module.exports = () => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath + '/index.html'));
  });

  app.get('/movie', routes.getMovie());

  return app;
};
