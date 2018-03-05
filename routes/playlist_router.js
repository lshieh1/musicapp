const express = require('express')
const playlistRouter = express.Router()

const playlistController = require('../controllers/playlist_controller')
const trackController = require('../controllers/track_controller')
const views = require('../controllers/view_controller')

playlistRouter.get('/new',playlistController.makeBlankPlaylist, views.showAddForm, views.show404)


playlistRouter.get('/:id/edit',playlistController.getOne, views.showEditForm, views.show404)
playlistRouter.get('/:id/new', trackController.makeBlankTrack, views.showTrackAddForm,views.show404)

playlistRouter.route('/:id')
	.get(trackController.index, playlistController.getOne, views.showOne, views.show404)
	.post(trackController.create, views.handleTrackCreate)
	.put(playlistController.update, views.handleUpdate, views.show406)
	.delete(playlistController.destroy, views.handleDelete)

playlistRouter.route('/:id/:trackId')
	.get(trackController.getOne, views.showOneTrack, views.show404)
	.delete(trackController.destroy, views.handleTrackDelete)



playlistRouter.route('/')
	.get(playlistController.index, views.showPlaylists, views.show404)
	.post(playlistController.create, views.handleCreate, views.show406)

module.exports = playlistRouter
