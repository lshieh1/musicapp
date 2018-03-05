const db = require('../config/connection')
const playlistDB = {}

module.exports = {
	findAll() {
		return db.any('SELECT * FROM playlists ORDER BY name')
	},

	findById(id) {
		return db.one('SELECT * FROM playlists WHERE id=$1',id)
	},

	save(playlist) {
		return db.one('INSERT INTO playlists(name) VALUES ($[name]) RETURNING *',playlist)
	},

	update(playlist) {
		return db.one('UPDATE playlists SET name=$[name] WHERE id=$[id] RETURNING *',playlist)
	},

	destroy(id) {
		return db.none('DELETE FROM tracks WHERE playlist_id=$1',id).then(() => {
			return db.none('DELETE FROM playlists WHERE id=$1',id)
		})
	}
}
