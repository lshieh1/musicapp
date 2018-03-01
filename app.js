const express = require('express')
const logger = require('morgan')
const request = require('request')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const playlistRouter = require('./routes/playlist_router')
const port = process.env.PORT || 3000

const app = express()

app.use(logger('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(methodOverride('_method'))

app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/',(req,res) => {
	res.render('index')
})

app.use('/playlists',playlistRouter)

app.use('*',(req,res) => {
	res.status(404).send('404: Not Found')
})

app.listen(port,() => {
	console.log(`Listening on port ${port}`)
})

