const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Movie Databaseh App');
});

app.listen(port, function() {
  console.log(`You can access the server on port: ${port}`);
});
