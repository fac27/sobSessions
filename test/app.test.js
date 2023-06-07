import request from 'supertest';
import server from '../src/server';

describe('GET home route handler', () => {
  it('responds with an html tag ', async () => {
    const response = await request(server).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toMatch(/<html/);
  });

  it('responds with the sobSessions logo text', async () => {
    const logoText = 'ಥ_ಥ';
    const response = await request(server).get('/');
    expect(response.text).toContain(logoText);
  });
});
