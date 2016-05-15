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

		var createUser = function() {
			user.id = generateUserID();
			user.isPlaying = false;
		};

		var storeUserInStorage = function () {
			localStorage['bgu'] = JSON.stringify(user);
		};
		return{
			initNewUser: function(){
				var userData = localStorage.getItem('bgu');
				if(!userData){
					// Means no record was found
					createUser();
					storeUserInStorage();
				}else{
					user = JSON.parse(userData);
					console.log('loaded user from LS')
				}
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
				storeUserInStorage();
			}

		};
	});
