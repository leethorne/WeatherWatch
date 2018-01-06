var axios = require('axios')

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//https://maps.googleapis.com/maps/api/geocode/json?address=[address]

function getWeather(req, res) {
    var address = req.query.address;

    //3rd party API to retrieve lat and longtitude from user address 
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
        .then(function (response) {

            //extracting the lat and long from Google API and setting to variable to enter into next API call 
            var lat = response.data.results[0].geometry.location.lat;
            var lng = response.data.results[0].geometry.location.lng;
            var key = process.env.DarkSkyAPIKey;

            //using the LAT and LNG as params in my next 3rd party API call 
            return axios.get(`https://api.darksky.net/forecast/${key}/${lat},${lng}`)
            })
        .then(function (response) {
            console.log("DARK SKY RESPONSE")
            console.log(response.data)
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

}



module.exports = { getWeather }