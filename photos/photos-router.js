const express = require('express');
const Photos = require('./photos-model');

const router = express.Router();

//get all photos with no validation

router.get('/', (req, res) => {
	Photos.getPhotos()
		.then(photos => {
			res.status(200).json(photos);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'uanble to access photos' });
		});
});

module.exports = router;
