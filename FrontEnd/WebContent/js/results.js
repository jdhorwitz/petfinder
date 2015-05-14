petFinderApp.controller('resultController', function($scope, $http, search, $location) {
	$scope.pets = search;
	$scope.filteredPets = [];
	$scope.currentPage = 1;
	$scope.numPerPage = 10;
	$scope.maxSize = 5;
	$scope.numPages = $scope.pets.results.length / $scope.numPerPage;
	
	$scope.$watchCollection('[pets.results, currentPage]', function() {
		console.log("Change detected!  |  pets.results");
		var begin = (($scope.currentPage - 1) * $scope.numPerPage);
		var end = begin + $scope.numPerPage;
		
		$scope.filteredPets = $scope.pets.results.slice(begin, end);
	});
});
