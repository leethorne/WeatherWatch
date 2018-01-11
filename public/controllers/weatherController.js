app.controller("weatherController", function($scope, $state, $stateParams, weatherService) {

    $scope.temp = "";
    $scope.forecast = "";
    $scope.location = "";
    $scope.latitude = '';
    $scope.longitude = '';

    $scope.resultsPresent = false;

    $scope.getWeather = function() {
        console.log($scope.location)
        weatherService.getWeather($scope.location)
        .then(function(response) {
            console.log(response)
            $scope.resultsPresent = true;
            $scope.latitude = response.data.latitude;
            $scope.longitude = response.data.longitude;
            $scope.timezone = response.data.timezone;
            $scope.temp = response.data.currently.temperature;
            $scope.forecast = response.data.hourly.summary;
            $scope.currentWindSpeed = response.data.currently.windSpeed;
            $scope.currentVisibility = response.data.currently.visibility;
            $scope.currentHumidity = response.data.currently.humidity;
            $scope.icon = response.data.currently.icon
            if ($scope.icon == 'rain') {
                console.log('raining');
                $scope.heroImage = {
                    background: 'url(https://media.giphy.com/media/l0Iy5fjHyedk9aDGU/giphy.gif)'
                };
            }
            if ($scope.icon == 'wind') {
                console.log('wind');
                $scope.heroImage = {
                    background: 'url(https://media.giphy.com/media/HmTLatwLWpTQk/giphy-downsized-large.gif)'
                };
            }
            if ($scope.icon == 'snow') {
                console.log('snow');
                $scope.heroImage = {
                    background: 'url(https://i.giphy.com/media/Yy26NRbpB9lDi/giphy.webp)'
                };
            }
            if ($scope.icon == 'clear-day') {
                console.log('clear-day');
                $scope.heroImage = {
                    background: 'url(https://i.giphy.com/media/IWHBAEKT9udiM/giphy.webp)'
                };
            }
            if ($scope.icon == 'clear-night') {
                console.log('clear-night');
                $scope.heroImage = {
                    background: 'url(https://78.media.tumblr.com/e1aaf912bc6e7b18277a53aea1e66b0d/tumblr_nc0g1zw73r1tqou9go1_500.gif)'
                };
            }
            if ($scope.icon == 'sleet') {
                console.log('sleet');
                $scope.heroImage = {
                    background: 'url(https://media.giphy.com/media/za2q5Ma5ljCQU/source.gif)'
                };
            }
            if ($scope.icon == 'fog') {
                console.log('fog');
                $scope.heroImage = {
                    background: 'url(https://78.media.tumblr.com/b18d5b158f5a350910e4a485131f9714/tumblr_nxh62ay5p11s7syh1o1_500.gif)'
                };
            }
            if ($scope.icon == 'cloudy') {
                console.log('cloudy');
                $scope.heroImage = {
                    background: 'url(https://media.giphy.com/media/3o7rc6sa2RvKo8K5EI/giphy.gif)'
                };
            }
            if ($scope.icon == 'partly-cloudy-day') {
                console.log('partly-cloudy-day');
                $scope.heroImage = {
                    background: 'url(http://www.doori.at/blog/wp-content/uploads/Day-trim-footage-wlogo_1000.gif)'
                };
            }
            if ($scope.icon == 'partly-cloudy-night') {
                console.log('partly-cloudy-night');
                $scope.heroImage = {
                    background: 'url(https://78.media.tumblr.com/adbcbfb7012cf86815cc56dd7c31eba1/tumblr_os1swhGEp31toamj8o1_500.gif)'
                };
            }
            if ($scope.icon == 'hail') {
                console.log('hail');
                $scope.heroImage = {
                    background: 'url(https://media.giphy.com/media/xTiTnGmU99wLFvZBfy/giphy.gif)'
                };
            }
            if ($scope.icon == 'thunderstorm') {
                console.log('thunderstorm');
                $scope.heroImage = {
                    background: 'url(https://media.giphy.com/media/JYEKQ8Vlb7wXu/giphy.gif)'
                };
            }
            if ($scope.icon == 'tornado') {
                console.log('tornado');
                $scope.heroImage = {
                    background: 'url(https://media.giphy.com/media/XEdsrmSbsa15S/giphy.gif)'
                };
            }

        }).then(function(response) {
            console.log($scope.latitude)
            console.log($scope.longitude)
            $scope.initMap();

        }, function(error) {
            console.log(error)
        })
    }

    $scope.initMap = function initMap() {
        console.log($scope.latitude)
        console.log($scope.longitude)
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: { lat: $scope.latitude, lng: $scope.longitude }
        });
        var marker = new google.maps.Marker({
            position: { lat: $scope.latitude, lng: $scope.longitude },
            map: map
        });
        resultsPresent = true;
    } 

    $scope.clearInfo = function() {
        $scope.location = null;
        $scope.resultsPresent = false;
        $scope.heroImage = null;
    }
})