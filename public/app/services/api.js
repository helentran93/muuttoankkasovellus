MuuttoApp.service('Api', function($http) {
    this.getSightings = function(){
        return $http.get('/sightings');
    };
    
    this.getSighting = function(id) {
        return $http.get('/sightings/' + id);
    };
    
    this.addSighting = function(sight) {
        return $http.post('/sightings', sight);
    };
    
    this.getSpecies = function(){
        return $http.get('/species');
    };
    
    this.addSpecies = function(species) {
        return $http.post('/species', species);
    };
})