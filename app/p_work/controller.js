'use strict';

angular.module('myApp.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'p_work/template.html',
    controller: 'WorkCtrl'
  });
}])

.controller('WorkCtrl', function($scope, $http) {

	$scope.workList;
  
	$http.get('json/works.json').success(function(data) {
		$scope.workList = data.works;
	});

});