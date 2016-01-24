const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Movie Database App');
});

app.listen(3000);
