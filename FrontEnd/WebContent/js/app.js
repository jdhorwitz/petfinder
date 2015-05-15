var petFinderApp = angular.module('petFinderApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);
//configure our routes
petFinderApp.config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
		    templateUrl : 'pages/home.html',
		    controller  : 'mainController'
		})
		
		// route for the search page
		.when('/search', {
			templateUrl : 'pages/search.html',
		    controller  : 'PetFinderController'
		})
		
		// route for the results page
		.when('/search/results', {
		    templateUrl : function(){
		    		return 'pages/results.html';
		    },
		    controller  : 'resultController'
		})
		
		// route for the about page
		.when('/about', {
		    templateUrl : 'pages/about.html',
		    controller  : 'mainController'
		})
		
		// route for the contact page
		.when('/contact', {
		    templateUrl : 'pages/contact.html',
		    controller  : 'mainController'
		});
});

angular.module('petFinderApp').service("search", function Search() {
	var search = this;
	search.results = [];
});

//create the controller and inject Angular's $scope
petFinderApp.controller('mainController', function($scope, $http) {
	
});