const expect = require('chai').expect;
const nock = require('nock');
const omdbapiResponse = require('../../fixtures/getMovieService.response');

const getMovieService = require('../../../src/server/services/getMovieService');


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
      .reply(200, omdbapiResponse);

      getMovieService.getMovie('inception', function(result) {
        expect(result).to.equal('Inception');
        done();
      });
    });
  });
});
