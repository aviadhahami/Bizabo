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
		$scope.startGame = function(){
			userData.initUser();
			userData.startGame();
			$location.path('/game');
		};
	}]);
