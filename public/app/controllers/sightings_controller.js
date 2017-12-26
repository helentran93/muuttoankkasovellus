MuuttoApp.controller('SightingsController', function($scope, $location, Api){
    
    Api.getSightings().then(function(sights){
        $scope.sights = sights.data;
    });
    
    $scope.newSight = {};
    
    $scope.addSight = function() {
        Api.addSight($scope.newSight).then(function (sighting) {
            $location.path("/sightings/" + sighting.id);
        });
    };
})