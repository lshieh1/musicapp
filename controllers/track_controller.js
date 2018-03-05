const trackDB = require('../models/trackDB')
const request = require('request')
const trackController = {}

module.exports = {
	makeBlankTrack(req,res,next) {
		const blankTrack = {
			id: null,
			title: null,
			artist: null,
			lyrics: null,
			playlist_id: req.params.id
		}
		res.locals.track = blankTrack
		next()
	},

	index(req,res,next) {
		trackDB.findAllOfPlaylist(req.params.id).then(tracks => {
			res.locals.tracks = tracks
			next()
		}).catch(err => {
			next(err)
		})
	},

	getOne(req,res,next) {
		trackDB.findById(req.params.trackId).then(track => {
			res.locals.track = track
			next()
		}).catch(err => {
			next(err)
		})
	},

	create(req,res,next) {
		let url = `https://api.lyrics.ovh/v1/${req.body.artist}/${req.body.title}`
		let hold = ''
		request(url, (error,response,body) => {
			let parsed = JSON.parse(body)
			req.body.lyrics = parsed.lyrics
			trackDB.save(req.body).then(track => {
				res.locals.track = track
				next()
			}).catch(err => {
				next(err)
			})
		})
	},

	destroy(req,res,next) {
		trackDB.destroy(req.params.trackId).then(() => {
			next()
		}).catch(err => {
			next(err)
		})
	}
}