MuuttoApp.controller('SightingsController', function($scope, $route, Api){
    
    Api.getSightings().then(function(sights){
        $scope.sights = sights.data;
    });
    
    $scope.newSight = {};
    
    $scope.addSight = function() {
        Api.addSighting($scope.newSight).then(function() {
            $route.reload();
        }).catch(function(notCreated) {
            $scope.errorMsg = notCreated.data;
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
    
    $scope.regex = "^[a-zA-Z_ ]+$";
})