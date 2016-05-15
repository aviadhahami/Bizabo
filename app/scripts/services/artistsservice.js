'use strict';

/**
 * @ngdoc service
 * @name bizzaboApp.ArtistsService
 * @description
 * # ArtistsService
 * Service in the bizzaboApp.
 */
angular.module('bizzaboApp')
	.service('ArtistsService', function () {
		// AngularJS will instantiate a singleton by calling "new" on this function
		var artists = [
			'Jack Johnson',
			'AFI',
			'The Angelcy',
			'Chance the Rapper',
			'Paramore',
			'The Fugees',
			'Erykah Badu',
			'Chet Faker',
			'Alt-J',
			'Flume',
			'Drake',
			'Joey Bada$$',
			'Wilkinson',
			'I See Stars',
			'Clean Bandit',
			'Calle 13',
			'5 Seconds of Summer',
			'Kid Cudi',
			'Garden City Movement',
			'The Roots'
		];
		return{
			getFullList:function(){
				return artists;
			},
			getRandomArtist: function(){
				return artists[Math.floor(Math.random() * artists.length)];
			}
		};
	});
