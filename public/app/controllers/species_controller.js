MuuttoApp.controller('SpeciesController', function($scope, $route, Api){
    
    Api.getSpecies().then(function(species){
        $scope.species = species.data;
    });
    
    $scope.newSpecies = {};
    
    $scope.addSpecies = function() {
        Api.addSpecies($scope.newSpecies).then(function() {
            $route.reload();
        }).catch(function(notAdded) {
            $scope.errorMsg = notAdded.data;
        });
    };
    
    $scope.regex = "^[a-zA-Z_ ]+$";
})