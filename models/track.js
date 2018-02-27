const pgp = require('pg-promise')
const dbConfig = require('../config/dbConfig')

const db = pgp(dbConfig)

module.exports = {
	findAll() {
		return db.any('SELECT * FROM tracks')
	},

	findById(id) {
		return db.one('SELECT * FROM quotes WHERE id=$1',id)
	},

	save(track) {
		return db.one('INSERT INTO tracks(id,name,artist,album) VALUES ($[id],$[name],$[artist],$[album]) RETURNING id',track)
	},

	update(track) {

	},

	destroy(id) {
		return db.none('DELETE FROM tracks WHERE id=$1',id)
	}
}