'use strict';

/**
 * @ngdoc service
 * @name bizzaboApp.iTunesApiService
 * @description
 * # iTunesApiService
 * Service in the bizzaboApp.
 */
angular.module('bizzaboApp')
	.service('iTunesApiService',['$q', '$http', function ($q, $http) {
		var baseURL = 'http://itunes.apple.com/search?';
		const queryLimit = 'limit=50';
		const entityType = 'entity=album';
		var injectParamsToUrl = function (paramsArr) {
			var url = baseURL;
			paramsArr.forEach(function(param){
				url = url.concat('&'+param);
			});
			return url;
		};
		return {
			getAlbums: function(artist){
				console.log('artis',typeof artist);
				var deferred = $q.defer();
				var jsonpParams ={
					params: {
						'callback': 'JSON_CALLBACK' // As defined by the docs
					}
				};
				var jsonpURL = injectParamsToUrl(['term='+artist.replace(/ /g,'+'),queryLimit,entityType]);
				$http.jsonp(jsonpURL,jsonpParams).then(function(res){
					deferred.resolve(res);
				},function(err){
					deferred.reject(err);
				});
				return deferred.promise;
			}
		}
	}]);
