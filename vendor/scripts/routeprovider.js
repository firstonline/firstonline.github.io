angular.module('portfolioApp', ['ngSanitize', 'ngRoute'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
		.when("/", {
			templateUrl : "portfolioPage.html"
		})
      .when('/#!/project1', {
        templateUrl: 'project1.html',
      })
      .when('/#!/project2', {
        templateUrl: 'project2.html',
      });

    $locationProvider.html5Mode(false);
}])
.controller('MainCtrl', ['$route', '$routeParams', '$location',
  function MainCtrl($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}])
.controller('BookCtrl', ['$routeParams', function BookCtrl($routeParams) {
  this.name = 'BookCtrl';
  this.params = $routeParams;
}])
.controller('ChapterCtrl', ['$routeParams', function ChapterCtrl($routeParams) {
  this.name = 'ChapterCtrl';
  this.params = $routeParams;
}]);