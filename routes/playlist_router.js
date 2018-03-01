const express = require('express')
const playlistRouter = express.Router()

const playlistController = require('../controllers/playlist_controller')
const views = require('../controllers/view_controller')


playlistRouter.get('/:id/edit',playlistController.getOne, views.showEditForm, views.show404)
playlistRouter.get('/new',playlistController.makeBlankPlaylist, views.showAddForm, views.show404)
playlistRouter.route('/:id')
	.get(playlistController.getOne, views.showOne, views.show404)
	.put(playlistController.update, views.handleUpdate, views.show406)
	.delete(playlistController.destroy, views.handleDelete, views.show404)

playlistRouter.route('/')
	.get(playlistController.index, views.showPlaylists, views.show404)
	.post(playlistController.create, views.handleCreate, views.show406)

module.exports = playlistRouter