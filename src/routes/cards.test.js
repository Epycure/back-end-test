const request = require('supertest');

// defining fake environment variables
process.env.BEARER_TOKEN = 'randomstring';
process.env.DATABASE_URL = 'postgres://localhost:5432/fakedbname';

// mocking Trello API
jest.mock('trello-node-api', () => jest.fn().mockImplementation(() => ({
  card: {
    create: jest.fn(),
  }
})));
const { trello } = require('../utils/services.js');

// setting up server
const app = require('../server.js');

describe('POST /cards', () => {
  it('should return 401 if bearer token is missing', async (done) => {
    const res = await request(app)
      .post('/cards')
      .send({});
    expect(res.status).toEqual(401);
    done();
  });
  
  it('should return 422 if params are empty', async (done) => {
    /* TODO: write the test */
    done();
  });
  
  it('should return 422 if name is incorrect', async (done) => {
    /* TODO: write the test */
    done();
  });
  
  it('should return 422 idList is incorrect', async (done) => {
    /* TODO: write the test */
    done();
  });
  
  it('should return 422 due format is incorrect', async (done) => {
    /* TODO: write the test */
    done();
  });
  
  it('should return 424 if idList does not exist', async (done) => {
    /* TODO: write the test using the trello SDK mock */
    done();
  });
});
