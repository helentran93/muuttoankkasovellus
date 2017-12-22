MuuttoApp.controller('ShowSightController', function($scope, $location, $routeParams, Api) {
    
    Api.getSighting($routeParams.id).then(function(showSight) {
       $scope.sighting = showSight; 
    });
})