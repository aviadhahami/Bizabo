'use strict';

/**
 * @ngdoc function
 * @name bizzaboApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the bizzaboApp
 */
angular.module('bizzaboApp')
	.controller('GameCtrl',['iTunesApiService','ArtistsService', function (iTunesApiService,ArtistsService) {
		var artist = ArtistsService.getRandomArtist();
		iTunesApiService.getAlbums(artist).then(function(res){
			console.log(res)
		},function(err){
			console.log(err)
		})
	}]);
