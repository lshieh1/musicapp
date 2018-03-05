const playlistDB = require('../models/playlistDB')
const playlistController = {}

module.exports = {
	makeBlankPlaylist(req,res,next) {
		const blankPlaylist = {
			id: null,
			name: null
		}
		res.locals.playlist = blankPlaylist
		next() 
	},

	index(req,res,next) {
		playlistDB.findAll().then(playlists => {
			res.locals.playlists = playlists
			next()
		}).catch(err => {
			next(err)
		})
	},

	getOne(req,res,next) {
		playlistDB.findById(req.params.id).then(playlist => {
			res.locals.playlist = playlist
			next()
		}).catch(err => {
			next(err)
		})
	},

	create(req,res,next) {
		console.log(req.body,'body')
		playlistDB.save(req.body).then(playlist => {
			res.locals.playlist = playlist
			next()
		}).catch(err => {
			next(err)
		})
	},

	update(req,res,next) {
		console.log(req.body, 'update controller')
		playlistDB.update(req.body).then(playlist => {
			res.locals.playlist = playlist
			next()
		}).catch(err => {
			next(err)
		})
	},

	destroy(req,res,next) {
		playlistDB.destroy(req.params.id).then(() => {
			next()
		}).catch(err => {
			next(err)
		})
	}
}