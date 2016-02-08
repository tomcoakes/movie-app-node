const request = require('request');

module.exports = function(movieTitle, callback) {

    request(`http://www.omdbapi.com/?t=${movieTitle}`, (err, response, body) => {
      if(err) {return console.log(err);}
      const result = JSON.parse(response.body).Title;
      return callback(result);
    });

};
