const expect = require('chai').expect;
const nock = require('nock');
const omdbapiResponse = require('../../fixtures/searchService.response');

const searchService = require('../../../src/server/services/searchService');


describe('searchService', () => {

  it.only('returns a 200 status even when there are no matching search results', (done) => {
    searchService.searchForMovie('noresults', function(result) {
      console.log('yo yo yo yo', result);
      expect(result.statusCode).to.equal(200);
      done();
    });
  });

  describe('using nock', () => {
    it('receives a response from omdb', (done) => {
      const omdbapi = nock('http://www.omdbapi.com')
        .get('/?s=interstellar')
        .reply(200, omdbapiResponse);

      searchService.searchForMovie('interstellar', function(result) {
        const firstResult = JSON.parse(result.body).Search[0];
        expect(firstResult.Title).to.equal('Interstellar');
        done();
      });

    });
  });
});
