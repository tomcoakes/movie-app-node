const express = require('express');
const app = express();
const path = require('path');
const viewsPath = path.resolve('src/client/views');

module.exports = () => {

  app.get('/', (req, res) => {
    res.sendFile(path.join(viewsPath + '/index.html'));
  });

  return app;
};
