'use strict';

/**
 * @ngdoc overview
 * @name bizabooApp
 * @description
 * # bizabooApp
 *
 * Main module of the application.
 */

angular
	.module('bizabooApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	]).config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
		})
		.when('/game', {
			templateUrl: 'views/game.html',
			controller: 'GameCtrl',
			controllerAs: 'game'
		})
		.otherwise({
			redirectTo: '/'
		});
});