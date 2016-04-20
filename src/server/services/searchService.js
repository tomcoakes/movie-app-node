const request = require('request');

module.exports = {
  searchForMovie: searchForMovie
};

function searchForMovie(movieTitle, callback) {
  request(`http://www.omdbapi.com/?s=${movieTitle}`, (err, response, body) => {
      handleNoResults(body, callback);
      return callback(response);
  });
}

function handleNoResults(body, callback) {
  console.log('couldnt find the movie');
  if(JSON.parse(body).Error === 'Movie not found!') {
    return callback({statusCode: 200, statusMessage: 'OK'});
  }
}


