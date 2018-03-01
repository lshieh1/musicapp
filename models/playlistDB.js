const db = require('../config/connection')

module.exports = {
	findAll() {
		return db.any('SELECT * FROM playlists')
	},

	findById(id) {
		return db.one('SELECT * FROM playlists WHERE id=$1',id)
	},

	save(playlist) {
		return db.one('INSERT INTO playlists(name) VALUES ($[name]) RETURNING id',playlist)
	},

	update(playlist) {
		return db.one('UPDATE playlists SET name=$[name] RETURNING *',playlist)
	},

	destroy(id) {
		return db.none('DELETE FROM playlists WHERE id=$1',id)
	}
}