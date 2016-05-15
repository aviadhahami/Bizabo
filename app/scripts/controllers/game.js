'use strict';

/**
 * @ngdoc function
 * @name bizzaboApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the bizzaboApp
 */
angular.module('bizzaboApp')
	.controller('GameCtrl',['$scope', 'iTunesApiService','ArtistsService', function ($scope, iTunesApiService,ArtistsService) {
		$scope.albums = [];
		$scope.round = 0;
		var init = function(){
			$scope.round = 1;
			initRound();
		};
		var initRound = function(){
			$scope.loading = true;
			iTunesApiService.getAlbums(ArtistsService.getRandomArtist()).then(function(res){
				console.log(res.data.results);
				$scope.loading = false;
			},function(err){
				console.log(err);
				alert('ERROR!');
			})
		};
		init();
	}]);
