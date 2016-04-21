var app = angular.module('myModule');

app.controller('displayController', function($scope, myService){
  var pleaseWork = myService.valueSetter();
  $scope.noun = pleaseWork.noun;
  $scope.adjective = pleaseWork.adj;
  $scope.adverb = pleaseWork.adv;
  $scope.pronoun = pleaseWork.pron;
  $scope.propernoun = pleaseWork.propn;
});




app.controller('exterController',
	function($scope, $timeout, githubService){
		$scope.events =
			githubService.events('auser');
	});

app.controller('exterController',
	function($scope, githubService) {
		$scope.setUsername =
			githubService.setUsername;
// watch for changes on the username property if there is a change, run the function
	$scope.$watch('username', function(newUsername) {
// uses the $http service to call the GitHub API and returns the resulting promise
		githubService.events(newUsername)
		.success(function(data, status, headers) {
			// the success function wraps
			// the response in data
			// so we need to call data.data to 
			// fetch the raw data
			$scope.events = data.data;
		})
	});
});

app.controller('exterController',
	function($scope, $timeout, githubService) {
	var timeout;
	$scope.$watch('username', function(newUsername) {
		if (newUsername) {
			// if there is a timeout already in progress
			if(timeout) $timeout.cancel(timeout);
			timeout = $timeout(function() {
				githubService.events(newUsername)
					.success(function(data, status) {
						$scope.events = data.data;
					});
			}, 350);
		}
	});
});