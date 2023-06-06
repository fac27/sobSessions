import server from '../src/server';
import request from 'supertest';

const PORT = process.env.PORT || 3333;

describe('GET /', () => {
    it('responds contains html tag ', async () => {
  
      const response = await request(server).get('/');
  
      expect(response.status).toBe(200);
      expect(response.text).toMatch(/<html/);
    });
  
    it('should respond with the sobSessions logo text', async () => {
      const logoText = 'ಥ_ಥ';
      const response = await request(server).get('/');
      expect(response.text).toContain(logoText);
    });
    
  });