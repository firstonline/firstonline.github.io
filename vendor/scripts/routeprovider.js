angular.module('portfolioApp', ['ngSanitize', 'ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
		.when("/", {
			templateUrl : "portfolioPage.html"
		})
      .when('/project/:projectId', {
        templateUrl: 'project.html',
		controller: 'ProjectCtrl',
      })

    $locationProvider.html5Mode(false);
}])
.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function MainCtrl($route, $routeParams, $location) {
	$scope.name = "test";
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
}])
.controller('ProjectCtrl', ['$routeParams', function BookCtrl($routeParams) {
    $scope.title = 'ProjectCtrl';
    $scope.params = $routeParams;
}])