'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'p_photo_gallery/template.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', function($scope, $http) {

	// ------------------------------
        // MASONRY GALLERY
		var gallery = $('.gallery');
		if(gallery.length) {
			gallery.each(function(index, element) {
				//wait for images
				$(element).imagesLoaded( function() {
					
					$(element).masonry();
					
				});
			});	
		}
		// ------------------------------

});