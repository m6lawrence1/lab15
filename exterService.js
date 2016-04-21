var app = angular.module('myModule');

	app.factory('githubService', function($http) {
		var githubUrl = 'https://api.github.com';
		var githubUsername;
		var runUserRequest = function(username, path) {
			return $http({
				method: 'JSONP',
				url: githubUrl + '/users/' +
				username + '/' +
				path + '?callback=JSON_CALLBACK'
			});
		}
		return {
			events: function() {
				return runUserRequest('events');
			},
			events: function(username) {
				return runUserRequest(username, 'events');
			}
		};
		// var serviceInstance = {};
		// return serviceInstance;

	});