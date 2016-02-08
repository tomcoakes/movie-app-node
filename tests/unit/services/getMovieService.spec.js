const expect = require('chai').expect;
const nock = require('nock');

const getMovieService = require('../../../src/server/services/getMovieService');

const responseFixture = {
  "Title": "Inception",
  "Year": "2010",
  "Rated": "PG-13",
  "Released": "16 Jul 2010",
  "Runtime": "148 min",
  "Genre": "Action, Mystery, Sci-Fi",
  "Director": "Christopher Nolan",
  "Writer": "Christopher Nolan",
  "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
  "Plot": "A thief who steals corporate secrets through use of the dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  "Language": "English, Japanese, French",
  "Country": "USA, UK",
  "Awards": "Won 4 Oscars. Another 138 wins & 192 nominations.",
  "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  "Metascore": "74",
  "imdbRating": "8.8",
  "imdbVotes": "1,366,602",
  "imdbID": "tt1375666",
  "Type": "movie",
  "Response": "True"
};

describe('getMovieService', () => {

  it('returns a 404 error if the movie doesn\'t exist', (done) => {
    getMovieService.getMovie('non-existent-film', function(result) {
      expect(result.statusMessage).to.equal('Not Found');
      expect(result.statusCode).to.equal(404);
      done();
    });
  });

  describe('using nock', () => {
    it('returns a callback', (done) => {
      const omdbapi = nock('http://www.omdbapi.com')
      .get('/?t=inception')
      .reply(200, responseFixture);

      getMovieService.getMovie('inception', function(result) {
        expect(result).to.equal('Inception');
        done();
      });
    });
  });
});
