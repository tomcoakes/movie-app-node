const request = require('request');

module.exports = {

  getMovie: function(movieTitle, callback) {
    request(`http://www.omdbapi.com/?t=${movieTitle}`, (err, response, body) => {
      if(err) {return console.log(err);}
      this._handleMissingMovie(body, callback);
      const result = this.generateViewModel(JSON.parse(response.body));
      // const result = JSON.parse(response.body).Title;
      return callback(result);
    });
  },

  _handleMissingMovie: function(body, callback) {
    if(JSON.parse(body).Error === 'Movie not found!') {
      return callback({statusCode: 404, statusMessage: 'Not Found'});
    }
  },

  generateViewModel: function(responseBody) {
    return {
      movieTitle: responseBody.Title
    };
  }


};
