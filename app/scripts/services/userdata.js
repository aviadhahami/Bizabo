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
				// Adding check for localStorage cause apparently fucking Edge doesn't support it
				return !!localStorage ? localStorage.getItem('bgu') !== null : false;
			},
			initUser: function(){
				if(!this.userExists()){
					// Means no record was found
					createUser();
					storeUserInStorage();
				}else{
					user = JSON.parse(localStorage.getItem('bgu'));
				}
			},
			startGame: function(){
				user.isPlaying = true;
			},
			getScores: function(){
				return user.scores;
			},
			getHighScore: function(){
				return  this.getScores().length===0 ? 0 :Math.max.apply(0, this.getScores());
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
