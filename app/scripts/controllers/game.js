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
		var albums = [];
		var attempt;
		var artist;
		var round;
		$scope.inputField ='';

		var initGame = function(){
			round = 0;
			initRound(round);
			$scope.score = 0;
		};
		
		var exposeAlbumToScope = function (index) {
			console.log(albums);
			console.log('pushing with index',index);
			$scope.albums.push(albums[index]);
		};

		var endGame = function () {
			// TODO: on game end
			console.log('DONE!')
		};

		var initRound = function(){

			round++;
			// Check for game end
			if(round === 6){
				endGame();
				return;
			}

			attempt=0;
			$scope.attemp = attempt;
			albums = [];
			$scope.albums = [];
			$scope.round = round;
			$scope.currentQuestions = [];
			$scope.loading = true;
			artist = ArtistsService.getRandomArtist();
			iTunesApiService.getThreeAlbums(artist).then(function(res){
				albums = res;
				exposeAlbumToScope(attempt);
				$scope.loading = false;
			},function(err){
				console.log(err);
			});
		};

		var updateScore = function () {
			switch (attempt){
				case 0:{
					$scope.score+=5;
					break;
				}
				case 1:{
					$scope.score+=3;
					break;
				}
				case 2:{
					$scope.score+=1;
					break;
				}
				default:{

					// non-harmful fallback
					$scope.score = $scope.score;
				}
			}
		};

		var performAttempt = function(guess){
			if(guess === artist){
				updateScore();
				initRound();
			}else{
				attempt++;
				$scope.attempt = attempt;
				console.log('attempt',attempt);
				if(attempt == 3){
					// Means we're done
					initRound();
				}else{
					exposeAlbumToScope(attempt);
				}
			}
		};

		$scope.guess = function(){
			if($scope.inputField.replace(/ /g,'').length == 0) return;
			performAttempt($scope.inputField);
		};
		initGame();
	}]);
