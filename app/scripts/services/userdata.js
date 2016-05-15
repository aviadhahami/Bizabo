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
			userExists: function(){
				console.log(localStorage.getItem('bgu'),localStorage.getItem('bgu') !== null);
				return localStorage.getItem('bgu') !== null;
			},
			initUser: function(){
				if(!this.userExists()){
					console.log('making user')
					// Means no record was found
					createUser();
					storeUserInStorage();
				}else{
					user = JSON.parse(localStorage.getItem('bgu'));
					console.log('loaded user from LS')

				}
			},
			startGame: function(){
				user.isPlaying = true;
			},
			getScores: function(){
				return user.scores;
			},
			getHighScore: function(){
				return  Math.max.apply(Math, this.getScores());
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
