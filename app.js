const express = require('express')
const logger = require('morgan')
const request = require('request')
const bodyParser = require('body-parser')
const trackRoute = require('./routes/track_route')
const port = process.env.PORT || 3000

const app = express()

const client_id = '2cc4313fc6ce4651943f4e925552e3f3'
const client_secret = '16668c5c91534d798d68b215b963470d'

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'))

app.set('view engine','ejs')

app.get('/',(req,res) => {
	res.render('index')
})

app.use('/tracks',trackRoute)

app.use('*',(req,res) => {
	res.status(404).send('404: Not Found')
})

app.listen(port,() => {
	console.log(`Listening on port ${port}`)
})

