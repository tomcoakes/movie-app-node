const expect = require('chai').expect;
const request = require('request');
const supertest = require('supertest');

const server = require('../../src/server/server.js');

const fakegetMovieService = {
  getMovie: function(movieTitle, callback) {
    return callback('Inception');
  }
};

const app = server(fakegetMovieService);

describe('routes', () => {

  describe('\'root\' route', () => {

    it('responds with a 200 status code', (done) => {
      supertest(app)
        .get('/')
        .expect(200, done);
    });

    it('responds with html', (done) => {
      supertest(app)
        .get('/')
        .expect('Content-Type', /html/, done);
    });
  });

  describe('\'movie\' route', () => {

    it('responds with a 200 status code when provided with a title parameter', (done) => {
      supertest(app)
        .get('/movie?title=inception')
        .expect(200, done);
    });

    it('responds with a 404 status code when title parameter is missing', (done) => {
      supertest(app)
        .get('/movie')
        .expect(404, done);
    });
  });
});
