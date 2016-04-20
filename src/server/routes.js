const request = require('request');

module.exports = function(movieService, searchService) {

  const routes = {};

  routes.getMovie = () => {
    return (req, res) => {
      if(!req.query.title) {return res.sendStatus(404);}
      movieService.getMovie(req.query.title, function(result) {
        res.render('movie', result);
      });
    };
  };

  routes.searchForMovie = () => {
    return (req, res) => {
      searchService.searchForMovie(req.query.title, function(result) {
        res.send(result);
      });
    };
  };

  return routes;

};
