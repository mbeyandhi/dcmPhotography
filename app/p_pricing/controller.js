'use strict';

angular.module('myApp.price', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pricing', {
    templateUrl: 'p_pricing/template.html',
    controller: 'PricingCtrl'
  });
}])

.controller('PricingCtrl', function($scope, $http) {


});