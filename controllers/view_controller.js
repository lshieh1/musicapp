module.exports = {
	show404(err,req,res,next) {
    	res.sendStatus(404)
  	},

  	show406(err,req,res,next) {
    	res.sendStatus(406)
  	},

  	showPlaylists(req,res) {
  		res.render('playlists/playlist-index', {
  			data: res.locals.playlists
  		})
  	},

  	showOne(req,res) {
  		// res.render('playlists/playlist-single', {
  		// 	data: res.locals.playlist
  		// })
  	},

  	showAddForm(req,res) {
  		res.render('playlists/playlist-add')
  	},

  	showEditForm(req,res) {
  		res.render('playlists/playlist-edit')
  	},

  	handleCreate(req,res) {
  		res.redirect('/playlists')
  	},

  	handleUpdate(req,res) {
  		res.redirect(`/quotes/${req.params.id}`)
  	},

  	handleDelete(req,res) {
  		res.redirect('/quotes')
  	}

}