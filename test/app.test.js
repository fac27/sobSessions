import request from 'supertest';
import server from '../src/server';
import { post } from '../src/routes/songs';
import { createInteraction } from '../src/model/interactions';

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

jest.mock('../src/model/interactions');

describe('Songs Route - POST', () => {
  const mockRequest = {
    body: {
      comment: 'Great song!',
      rating: 5,
      song_id: 123,
    },
  };
  const mockResponse = {
    redirect: jest.fn(),
  };

  beforeEach(() => {
    createInteraction.mockReset();
    mockResponse.redirect.mockReset();
  });

  it('should create an interaction and redirect to /songs', () => {
    post(mockRequest, mockResponse);

    expect(createInteraction).toHaveBeenCalledWith({
      song_id: 123,
      rating: 5,
      comment: 'Great song!',
    });
    expect(mockResponse.redirect).toHaveBeenCalledWith('/songs');
  });
});
