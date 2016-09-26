'use strict';

angular.module('myApp.aboutus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/aboutus', {
    templateUrl: 'p_aboutUs/template.html',
    controller: 'AboutusCtrl'
  });
}])

.controller('AboutusCtrl', function($scope, $http) {


});