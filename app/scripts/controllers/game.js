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


		var initGame = function(){
			initRound(1);
		};

		var initRound = function(roundNum){
			$scope.albums = [];
			$scope.round = roundNum;
			$scope.currentQuestions = [];
			$scope.loading = true;
		};

		initGame();
		iTunesApiService.getThreeAlbums(ArtistsService.getRandomArtist()).then(function(res){
			console.log(res);
		},function(err){
			console.log(err);
		})
	}]);
