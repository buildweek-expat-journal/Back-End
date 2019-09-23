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
			res.status(500).json({ error: 'unable to access photos' });
		});
});

// get all photos from user id
router.get('/:id', (req, res) => {
	const { id } = req.params;
	Photos.getUserIdPhotos(id)
		.then(photos => {
			if (photos) {
				res.status(200).json(photos);
			} else {
				res.status(404).json({ error: 'Could not find photo with that id.' });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'unable to locate photos for that user' });
		});
});

// add new photo to userid
router.post('/:id', (req, res) => {
	const { location, url, user_id } = req.body;
	const { id } = req.params;

	Photos.findPhotoById(id)
		.then(user => {
			if (user) {
				Photos.addPhoto({ location, url, user_id }, id).then(photo => {
					res.status(201).json(photo);
				});
			} else {
				res.status(404).json({ error: 'Could not find user with that Id' });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'Failed to add new Photo' });
		});
});

router.delete('/:photoId', (req, res) => {
  // console.log('photoid 1', req.params)
	const { photoId } = req.params
	// console.log('photo id', photoId);

	Photos.removePhotoById(photoId)
		.then(deleted => {
			if (deleted) {
				res.json(204).json({ removed: deleted });
			} else {
				res.status(404).json({ error: 'Could not find photo with that id' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'Failed to delete photo' });
		});
});

module.exports = router;
