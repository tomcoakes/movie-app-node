module.exports = (responseBody) => {
  return {
    movieTitle: responseBody.Title,
    movieYear: responseBody.Year
  };
};
