'use strict';

/**
 * @ngdoc function
 * @name bizzaboApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bizzaboApp
 */
angular.module('bizzaboApp')
	.controller('MainCtrl',['$scope','userData','$location' ,function ($scope, userData, $location) {
		// if(userData.userExists()){
		// 	console.log('user exists')
		// 	userData.initUser();
		// 	$scope.highScore = userData.getHighScore();
		// }

		$scope.startGame = function(){
			userData.initUser();
			userData.startGame();
			$location.path('/game');
		};
	}]);
