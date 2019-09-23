const db = require('../data/dbConfig');

module.exports = {
	add,
	find,
	findById,
	findBy
};

function add(user) {
	return db('users')
		.insert(user, 'id')
}

function find() {
	return db('users').select('id', 'username', 'password');
}

function findBy(username) {
	return db('users').where(username);
}

function findById() {
	return db('users')
		.where({ id })
		.first();
}
