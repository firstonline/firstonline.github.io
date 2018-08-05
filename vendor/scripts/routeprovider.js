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
.controller('MainCtrl', [ '$scope', '$route', '$routeParams', '$location',
  function MainCtrl($scope, $route, $routeParams, $location) {
	$scope.name = "test";
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
}])
.controller('ProjectCtrl', [ '$scope', '$routeParams', function BookCtrl($scope, $routeParams) {
    $scope.title = 'ProjectCtrl';
    $scope.params = $routeParams;
}])