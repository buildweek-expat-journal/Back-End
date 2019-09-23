const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
	return knex('users').then(function() {
		return knex('users').insert([
			{
				username: 'test1',
				password: bcrypt.hashSync('test1', 8),
				first_name: 'test1',
				last_name: 'test1',
				age: 0,
				location: 'lambda'
			},
			{
				username: 'test2',
				password: bcrypt.hashSync('test2', 8),
				first_name: 'test2',
				last_name: 'test2',
				age: 1,
				location: 'lambda1'
			},
			{
				username: 'test3',
				password: bcrypt.hashSync('test3', 8),
				first_name: 'test3',
				last_name: 'test3',
				age: 2,
				location: 'lambda2'
			}
		]);
	});
};
