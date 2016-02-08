const request = require('request');

module.exports = function(getMovieService) {

  const routes = {};

  routes.getMovie = () => {
    return (req, res) => {
      if(!req.query.title) {return res.sendStatus(404);}
      getMovieService(req.query.title, function(result) {
        res.send(result);
      });
    };
  };

  return routes;

};
