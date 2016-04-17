const request = require('request');

module.exports = function(movieService) {

  const routes = {};

  routes.getMovie = () => {
    return (req, res) => {
      if(!req.query.title) {return res.sendStatus(404);}
      movieService.getMovie(req.query.title, function(result) {
        res.render('movie', {movieTitle: result.movieTitle, movieYear: result.movieYear, releaseDate: result.releaseDate});
      });
    };
  };

  return routes;

};
