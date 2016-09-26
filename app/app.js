'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.work',
  'myApp.price',
  'myApp.aboutus',
  'myApp.contact',
  'myApp.gallery',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('MainController', function MainController($scope, $http, $location) {

	$scope.active = true;
	$scope.isActive = function () {	
	$scope.selectedNav = $location.path();	
		if('/home' === $location.path() || '/#' === $location.path())
			return true; 	
	}
	
});