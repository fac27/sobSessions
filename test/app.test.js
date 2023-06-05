const server = require('../src/server');
const request = require('supertest');

const PORT = process.env.PORT || 3333;

describe('GET /', () => {
    it('responds contains html tag ', async () => {
  
      const response = await request(server).get('/');
  
      expect(response.status).toBe(200);
      expect(response.text).toMatch(/<html/);
    });

    
  });