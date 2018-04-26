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
  		res.render('playlists/playlist-single', {
  			data: res.locals.playlist,
  			tdata: res.locals.tracks
  		})
  	},

  	showAddForm(req,res) {
  		res.render('playlists/playlist-add')
  	},

  	showEditForm(req,res) {
  		res.render('playlists/playlist-edit', {
  			data: res.locals.playlist
  		})
  	},

  	handleCreate(req,res) {
  		res.redirect('/playlists')
  	},

  	handleUpdate(req,res) {
  		res.redirect(`/playlists/${req.params.id}`)
  	},

  	handleDelete(req,res) {
  		res.redirect('/playlists')
  	},

  	showOneTrack(req,res) {
  		res.render('tracks/track-single', {
  			data: res.locals.track
  		})
  	},

  	showTrackAddForm(req,res) {
  		res.render('tracks/track-add', {
        data: res.locals.track
      })
  	},

  	handleTrackCreate(req,res) {
      res.redirect(`/playlists/${req.params.id}`)
  	},

  	handleTrackDelete(req,res) {
  		res.redirect(`/playlists/${req.params.id}`)
  	}
}