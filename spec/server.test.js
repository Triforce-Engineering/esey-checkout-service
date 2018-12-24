const request = require('supertest');
const app = require('../server/index.js');


describe('get /items/:id', () => {
  test('It should connect to the server', (done) => {
    request(app).get('/items/3')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
