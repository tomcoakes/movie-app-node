const request = require('request');

const generateMovieViewModel = require('./movieViewModelGenerator');

module.exports = {

  getMovie: function(movieTitle, callback) {
    request(`http://www.omdbapi.com/?t=${movieTitle}`, (err, res, body) => {
      if(err) {return console.log(err);}
      this._handleMissingMovie(body, callback);
      const result = generateMovieViewModel(JSON.parse(body));
      return callback(result);
    });
  },

  _handleMissingMovie: function(body, callback) {
    if(JSON.parse(body).Error === 'Movie not found!') {
      return callback({statusCode: 404, statusMessage: 'Not Found'});
    }
  },

};
