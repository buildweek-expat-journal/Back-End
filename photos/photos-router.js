const express = require('express');
const Photos = require('./photos-model');

const restricted = require('../auth/authenticate-middleware')

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

// Restricted
// get all photos from user id
router.get('/:userId', restricted, (req, res) => {
	const { userId } = req.params;
	Photos.getUserIdPhotos(userId)
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
router.post('/:id', restricted, (req, res) => {
	const { location, url, user_id } = req.body;
	const { id } = req.params;

	Photos.findPhotoById(id)
		.then(user => {
			if (user) {
				Photos.addPhoto({ location, url, user_id }, id).then(photo => {
					res.status(201).json(photo);
				});
			} else {
				res.status(404).json({ error: 'Photo must have location, url and user_id' });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'Failed to add new Photo' });
		});
});

// delete photo from db
router.delete('/:photoId', restricted, (req, res) => {
	// console.log('photoid 1', req.params)
	const { photoId } = req.params;
	// console.log('photo id', photoId);

	Photos.removePhotoById(photoId)
		.then(deleted => {
			if (deleted) {
				console.log('deleted', deleted);
				res.json(204).json({ removed: deleted });
			} else {
				res.status(404).json({ error: 'Could not find photo with that id' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'Failed to delete photo' });
		});
});

// update photo
router.put('/:photoId', restricted, (req, res) => {
	const { photoId } = req.params;
	const { location, description, url } = req.body;

	Photos.findPhotoById(photoId)
		.then(photo => {
			if (photo) {
				Photos.updatePhoto(photoId, { location, description, url }).then(
					updatedPhoto => {
						res.status(201).json(updatedPhoto);
					}
				);
			} else {
				res.status(404).json({ error: 'Could not find photo with that id' });
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'Failed to update photo' });
		});
});

module.exports = router;
