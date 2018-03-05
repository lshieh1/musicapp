const express = require('express')
const logger = require('morgan')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const playlistRouter = require('./routes/playlist_router')
const port = process.env.PORT || 3000

// let credentials = {
//   clientId : '2cc4313fc6ce4651943f4e925552e3f3',
//   clientSecret : '16668c5c91534d798d68b215b963470d',
//   redirectUri : 'http://localhost:3000/callback'
// };

// let spotify = new Spotify(credentials);
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

