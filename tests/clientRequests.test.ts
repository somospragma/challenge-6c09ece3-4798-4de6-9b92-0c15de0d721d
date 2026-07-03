import request from 'supertest';
import app from '../src';

describe('Client Requests', () => {
  test('should return a list of clients', async () => {
    const response = await request(app)
     .get('/clients');
    expect(response.statusCode).toBe(200);
  });

  test('should create a new client', async () => {
    const response = await request(app)
     .post('/clients')
     .send({
        name: 'John Doe',
        email: 'johndoe@example.com'
      });
    expect(response.statusCode).toBe(201);
  });
});