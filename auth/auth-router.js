const express = require('express');
const bcrypt = require('bcryptjs');

const tokenService = require('./token-service');

const Users = require('../users/users-model');

const router = express.Router();

router.get('/', (req, res) => {
	Users.find()
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
			console.log(err);
			res.status(500).jason({ error: 'unable to find all users' });
		});
});

router.post('/register', (req, res) => {
	let { username, password, first_name, last_name } = req.body;
	
	if (!username || !password || !first_name || !last_name) {
		res
		.status(404)
		.json({
			error: 'User must have username, password, first_name and last_name'
		})
		return
	}
	
	const hash = bcrypt.hashSync(password, 8);
	Users.add({ username, password: hash, first_name, last_name })
		.then(saved => {
				console.log('pre token saved', saved);
				const token = tokenService.generateToken(saved);
				// console.log('post token saved', saved);
				res.status(201).json({
					message: `You are registered!`,
					token
				});
			
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'User Already exists, please choose a different name' });
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = tokenService.generateToken(user);

				return res
					.status(200)
					.json({ message: `Welcome ${user.username}!`, token });
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'could not find user' });
		});
});

module.exports = router;
