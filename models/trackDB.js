const db = require('../config/connection')
const trackDB = {}

module.exports = {
	findAllOfPlaylist(playlistId) {
		return db.any('SELECT * FROM tracks WHERE playlist_id=$1',playlistId)
	},

	findById(id) {
		return db.one('SELECT * FROM tracks WHERE id=$1',id)
	},

	save(track) {
		return db.one('INSERT INTO tracks(title,artist,lyrics,link,playlist_id) VALUES ($[title],$[artist],$[lyrics],$[link],$[playlist_id]) RETURNING *',track)
	},

	destroy(id) {
		return db.none('DELETE FROM tracks WHERE id=$1',id)
	}
}

//module.exports.findById('welp').then(track=>console.log(track)).catch(err=>console.log(err))