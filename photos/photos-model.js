const db = require('../data/dbConfig');

module.exports = {
	getPhotos,
	getUserIdPhotos,
	addPhoto,
	findPhotoById,
	removePhotoById,
	updatePhoto
};

function getPhotos() {
	return db('photos');
}

function getUserIdPhotos(id) {
	return db('photos').where({ user_id: id });
}

function addPhoto(photo) {
	return db('photos')
		.insert(photo, 'id')
		.then(ids => {
			const [id] = ids;
			return findPhotoById(id);
		});
}

function findPhotoById(id) {
	return db('photos')
		.where({ id })
		.first();
}

function removePhotoById(id) {
	return db('photos')
		.where('id', id)
		.del();
}

function updatePhoto(id, changes) {
	return db('photos')
		.where({ id })
		.update(changes, 'id');
}
