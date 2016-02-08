const request = require('request');

module.exports = {

  getMovie: function(movieTitle, callback) {
    request(`http://www.omdbapi.com/?t=${movieTitle}`, (err, response, body) => {
      if(err) {return console.log(err);}
      if(JSON.parse(body).Error === 'Movie not found!') {return callback({statusCode: 404, statusMessage: 'Not Found'});}
      const result = JSON.parse(response.body).Title;
      return callback(result);
    });
  }

};
