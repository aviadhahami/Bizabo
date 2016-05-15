'use strict';

/**
 * @ngdoc service
 * @name bizzaboApp.userData
 * @description
 * # userData
 * Service in the bizzaboApp.
 */
angular.module('bizzaboApp')
	.service('userData', function () {
		var user = {
			id:'',
			isPlaying:'',
			scores:[]
		};

		var generateUserID = function () {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				s4() + '-' + s4() + s4() + s4();
		};
		return{
			initNewUser: function(){
				user.id = generateUserID();
				user.isPlaying = false;
			},
			startGame: function(){
				user.isPlaying = true;
			},
			isPlaying: function(){
				return user.isPlaying;
			},
			pushScore: function(score){
				user.scores.push(score);
			},
			endGame : function(){
				user.isPlaying = false;
			}

		};
	});
