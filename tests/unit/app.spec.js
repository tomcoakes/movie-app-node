const expect = require('chai').expect;
const request = require('request');
const supertest = require('supertest');

const app = require('../../src/server/server.js')();

describe('routes', () => {

  describe('root route', () => {

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

});
