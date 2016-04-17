const moment = require('moment');

module.exports = (responseBody) => {
  return {
    movieTitle: responseBody.Title,
    movieYear: responseBody.Year,
    releaseDate: formatDate(responseBody.Released)
  };
};

function formatDate(date) {
  const parsedDate = new Date(date);
  return moment(parsedDate).format('Do MMMM YYYY');
}
