app.service("weatherService", function($http) {

    this.getWeather = function(address) {
        return $http.get("http://localhost:3000/weather?address=" + address)
    }
})