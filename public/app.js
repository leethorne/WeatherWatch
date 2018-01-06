var app = angular.module("weatherApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider
    .state("home", {
        url: "/",
        templateUrl: "./views/home.html",
        controller: "weatherController"
    })
})