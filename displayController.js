var app = angular.module('myModule');

app.controller('displayController', function($scope, myService){
  var pleaseWork = myService.valueSetter();
  $scope.noun = pleaseWork.noun;
  $scope.adjective = pleaseWork.adj;
  $scope.adverb = pleaseWork.adv;
  $scope.pronoun = pleaseWork.pron;
  $scope.propernoun = pleaseWork.propn;
});




