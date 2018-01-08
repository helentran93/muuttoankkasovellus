var MuuttoApp = angular.module('MuuttoApp', ['ngRoute']);

MuuttoApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
            controller: 'SightingsController',
            templateUrl: 'app/views/sightings/index.html'
        })
        .when('/sightings/:id', {
            controller: 'ShowSightController',
            templateUrl: 'app/views/sightings/show.html'
        })
        .when('/species', {
            controller: 'SpeciesController',
            templateUrl: 'app/views/species/index.html'
        })
}]);