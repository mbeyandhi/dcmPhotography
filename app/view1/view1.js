'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {

	$scope.gridList;
  
	$http.get('json/homePhotos.json').success(function(data) {
		$scope.gridList = data.homePhotos;
	});

  // Rotating Words
		var rotate_words = $('.rotate-words'),
			interval = 3000;
		 if(rotate_words.length) {
			
			var next_word_index = 0;
			interval = rotate_words.data("interval");
			
			if(Modernizr.csstransforms3d) {
			
				rotate_words.each(function(index, element) {
					$(element).find('span').eq(0).addClass('active');
					setInterval(function(){
						next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
						$(element).find('.active').addClass('rotate-out').removeClass('rotate-in active');
						$(element).find('span').eq(next_word_index).addClass('rotate-in active').removeClass('rotate-out');
					},interval);
				});
	
			}
			else {
				
				rotate_words.each(function(index, element) {
					$(element).find('span').eq(0).addClass('active').show();
					setInterval(function(){
						next_word_index = $(element).find('.active').next().length ? $(element).find('.active').next().index() : 0;
						$(element).find('.active').removeClass('active').slideUp(500);
						$(element).find('span').eq(next_word_index).addClass('active').slideDown(500);
					},interval);
				});
			}
		} 
		// ------------------------------

})
.directive('gridRotator', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
		debugger;
		var riGrid = angular.element(element);
		setTimeout(function(){  
            riGrid.gridrotator({
					rows : 5,
					columns : 9,
					maxStep : 3, // 1 to 3
					interval : 1600, // in ms
					
					// animation type
					// showHide || fadeInOut || slideLeft || 
					// slideRight || slideTop || slideBottom || 
					// rotateLeft || rotateRight || rotateTop || 
					// rotateBottom || scale || rotate3d || 
					// rotateLeftScale || rotateRightScale || 
					// rotateTopScale || rotateBottomScale || random
					animType : 'random',
					
					w1500 : {
						rows : 5,
						columns : 8
					},
					w1200 : {
						rows : 6,
						columns : 7
					},
					w1024 : {
						rows : 7,
						columns : 5
					},
					w768 : {
						rows : 7,
						columns : 4
					},
					w480 : {
						rows : 7,
						columns : 3
					},
					w320 : {
						rows : 6,
						columns : 3
					}
				});
				}, 100);
        }
    };
});