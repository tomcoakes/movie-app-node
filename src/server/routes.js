module.exports = {
  getMovie: getMovie
};

function getMovie() {
  return (req, res) => {
    if(!req.query.title) {
      res.sendStatus(404);
    }
    res.end();
  };
}
