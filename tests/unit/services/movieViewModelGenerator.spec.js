const expect = require('chai').expect;

const generateMovieViewModel = require('../../../src/server/services/movieViewModelGenerator');
const omdbapiResponse = require('../../fixtures/movieService.response');


describe('viewModelGenerator generates a model that', () => {
  it('includes a movieTitle', () => {
    expect(generateMovieViewModel(omdbapiResponse).movieTitle).to.equal('Inception');
  });

  it('includes a year', () => {
    expect(generateMovieViewModel(omdbapiResponse).movieYear).to.equal('2010');
  })

  it('includes the full release date in the correct format', () => {
    expect(generateMovieViewModel(omdbapiResponse).releaseDate).to.equal('16th July 2010');
  })
});
