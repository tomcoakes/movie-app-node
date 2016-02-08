const request = require('request');

const requestMovie = require('./services/getMovieService');

module.exports = {
  getMovie: getMovie
};

function getMovie() {
  return (req, res) => {
    if(!req.query.title) {return res.sendStatus(404);}
    requestMovie(req.query.title, function(result) {
      res.send(result);
    });
  };
}
