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
        }).catch(function(notCreated) {
            $scope.errorMsg = notCreated.error;
        });
    };
    
    $scope.propertyName = 'dateTime';
    $scope.reverse = true;
    
    $scope.orderRecent = function(propertyName) {
        $scope.reverse = true;
        $scope.propertyName = propertyName;
    };
    
    $scope.orderOld = function(propertyName) {
        $scope.reverse = false;
        $scope.propertyName = propertyName;
    };
})