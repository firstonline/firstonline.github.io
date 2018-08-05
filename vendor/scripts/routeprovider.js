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
	this.name = "test";
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}])
.controller('ProjectCtrl', ['$routeParams', function BookCtrl($routeParams) {
  this.title = 'ProjectCtrl';
  this.params = $routeParams;
}])