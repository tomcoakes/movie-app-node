const formatDate = require('../helpers/formatDate');

module.exports = (responseBody) => {
  return {
    movieTitle: responseBody.Title,
    movieYear: responseBody.Year,
    releaseDate: formatDate(responseBody.Released)
  };
};
