var MuuttoApp = angular.module('MuuttoApp', ['ngRoute']);

MuuttoApp.config(function($routeProvider){
    $routeProvider.when('/', {
            controller: 'SightingsController',
            templateUrl: 'app/views/sightings/index.html'
        })
        .when('sightings/:id', {
            controller: 'ShowSightController',
            templateUrl: 'app/views/sightings/show.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});