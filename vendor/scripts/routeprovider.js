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
//, $route, $routeParams, $location , '$routeParams', '$location',
.controller('MainCtrl', ['$scope',
  function MainCtrl($scope) {
	$scope.name = "test";
	//$scope.$route = $route;
	//$scope.$location = $location;
	//$scope.$routeParams = $routeParams;
}])
.controller('ProjectCtrl', ['$scope', function BookCtrl($scope) {
    $scope.title = 'ProjectCtrl';
    //$scope.params = $routeParams;
}])