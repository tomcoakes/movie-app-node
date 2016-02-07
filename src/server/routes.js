const request = require('request');

module.exports = {
  getMovie: getMovie
};

function getMovie() {
  return (req, res) => {
    if(!req.query.title) {res.sendStatus(404);}

    request(`http://www.omdbapi.com/?t=${req.query.title}`, (err, response, body) => {
      if(err) {console.log(err);}
      console.log(response.body);
      const movieTitle = JSON.parse(response.body).Title;
      res.send(movieTitle);
    });

  };
}
