MuuttoApp.controller('SightingsController', function($scope, $route, Api){
    
    Api.getSightings().then(function(sights){
        $scope.sights = sights.data;
    });
    
    Api.getSpecies().then(function(species){
        $scope.species = species.data;
    });
    
    $scope.newSight = {};
    
    $scope.addSight = function() {
        Api.addSighting($scope.newSight).then(function() {
            $route.reload();
        });
    };
})