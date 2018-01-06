var express = require('express');
var router = express.Router();

var weatherController = require('../controllers/weather-controller.js')
var middleware = require('../middleware/custom.js')

//http://localhost:3000/weather
router.get('/', middleware.lowerCase, weatherController.getWeather);

module.exports = router;
