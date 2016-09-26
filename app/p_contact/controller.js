'use strict';

angular.module('myApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'p_contact/template.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', function($scope, $http) {


});