petFinderApp.controller('PetFinderController', function($scope, $http, search, $location) {
    $scope.pets = search;
    var API_URL = "http://localhost:8080/spring/pet/get";
    var START = 0;
    var NUM_RESULTS = 10; 
    
    //  Choose one of these methods to send the info to the backend
    //    depending on if we want to send an array of objects or nested objects
    var args = [];
    args.push({start: START, numResults: NUM_RESULTS});    
    
    var args2 = {};
    args2.meta = {start: START, numResults: NUM_RESULTS};
     
    $scope.getSearch = function() {
    	args.push({name:$scope.petName, age:$scope.petAge, color:$scope.petColor, species:$scope.petSpecies, breed:$scope.petBreed});
    	args2.petInfo = {name:$scope.petName, age:$scope.petAge, color:$scope.petColor, species:$scope.petSpecies, breed:$scope.petBreed};
    	$scope.petName = '';
    	$scope.petAge = '';
    	$scope.petColor = '';
    	$scope.petSpecies = '';
    	$scope.petBreed = '';
    	console.log("Getting User Arguments: " + JSON.stringify(args2));
    	$scope.getPet();
    };
    
    //  WORKING
    $scope.getPet = function() {
    	$scope.clear();
    	$http.post(API_URL, args2).success( function(data) {
    		console.log("PetFinderController > getPet() | sending " + JSON.stringify(args2) + " to BackEnd");
    		$scope.pets.results = $.merge(data, $scope.pets.results);
        	$location.path('/search/results');
    	});
    };
 
    $scope.countPets = function() {
    	var count = 0;
    	angular.forEach($scope.pets.results, function(pet) {
    		count += 1;
    	});
    	return count;
    };
 
    $scope.clear = function() {
    	$scope.pets.results = [];
    };
    
    $scope.$watchCollection('[pets.results, currentPage]', function() {
    	
    });
    
    
    $scope.example1model = []; $scope.example1data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Danny"}];
    
    
});