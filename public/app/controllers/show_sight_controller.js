MuuttoApp.controller('ShowSightController', function($scope, $routeParams, Api) {
    
    Api.getSighting($routeParams.id).then(function(showSight) {
       $scope.sighting = showSight.data;
    });
})