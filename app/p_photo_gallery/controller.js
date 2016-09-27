'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery/:galleryId', {
    templateUrl: 'p_photo_gallery/template.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', function($scope, $http, $routeParams) {

console.log($routeParams.galleryId.replace(/^:/, ''));

	$scope.galleryList;
  
	$http.get('json/gallery.json').success(function(data) {
		$scope.galleryData = data;
		$scope.galleryList = data[$routeParams.galleryId.replace(/^:/, '')];
		
		//$scope.previous = $routeParams.galleryId.replace(/^:/, '') - 1;
		//$scope.next =  $routeParams.galleryId.replace(/^:/, '') + 1;
		
	});

	// ------------------------------
        // MASONRY GALLERY
		/*var gallery = $('.gallery');
		if(gallery.length) {
			gallery.each(function(index, element) {
				//wait for images
				$(element).imagesLoaded( function() {
					
					$(element).masonry();
					
				});
			});	
		} */
		// ------------------------------

});