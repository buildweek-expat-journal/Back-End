const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');
const Users = require('../users/users-model');

describe('server', () => {
	beforeEach(async () => {
		await db('users').truncate();
	});

	describe('environment test', () => {
		it('should be testing environment', () => {
			expect(process.env.DB_ENV).toBe('testing');
		});
	});

	describe('POST /api/auth/register', () => {
		it('returns 201', () => {
			return request(server)
				.post('/api/auth/register')
				.send({
					username: 'admin1',
					password: 'admin',
					first_name: 'admin',
					last_name: 'admin'
				})
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('returns 404', () => {
			return request(server)
				.post('/api/auth/register')
				.send({
					username: 'admin1',
					password: 'admin'
				})
				.then(res => () => {
					expect(res.status).toBe(404);
				});
		});

		// How would I test for a 500 user already exists?
		// it('returns 500', () => {
		// 	return request(server)
		// 		.post('/api/auth/register')
		// 		.send({
		// 			username: 'admin1',
		// 			password: 'admin',
		// 			first_name: 'admin',
		// 			last_name: 'admin'
		// 		})
		// 		.then(res => {
		// 			expect(res.status).toBe(500);
		// 		});
		// });
	});

	describe('POST /api/auth/login', () => {
		it('returns 201', async () => {
			let regUser = await request(server)
				.post('/api/auth/register')
				.send({
					username: 'admin1',
					password: 'admin',
					first_name: 'admin',
					last_name: 'admin'
				});
			expect(regUser.status).toBe(201);

			let logUser = await request(server)
				.post('/api/auth/login')
				.send({ username: 'admin1', password: 'admin' });
			expect(logUser.body.token).toBeTruthy;
		});

		it('test 401', () => {
			return request(server)
				.post('/api/auth/login')
				.send({ username: 'admin1', password: 'sum' })
				.then(res => {
					expect(res.status).toBe(401);
				});
		});

		// how to test for a user that can not be found?
		// it('test 500', () => {
		// 	return request(server)
		// 		.post('/api/auth/login')
		// 		.send({ username: 'pat', password: 'patt' })
		// 		.then(res => {
		// 			expect(res.status).toBe(500);
		// 		});
		// });

	});
});
