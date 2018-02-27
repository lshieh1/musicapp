const express = require('express')
const trackRoute = express.Route()
//const trackController = require('../controllers/pokemon-controller')

trackController.get('/',trackController.index)

module.exports = trackRoute