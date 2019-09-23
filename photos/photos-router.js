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

// get all photos from user id
router.get('/:id', (req, res) => {
  const {id} = req.params
	Photos.getUserIdPhotos(id)
		.then(photos => {
			res.status(200).json(photos);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to locate photos for that user' });
		});
});

module.exports = router;
