var app = angular.module('myModule');

app.controller('formController', function($scope, myService){
  $scope.addValues = function () {
    var addedValues = {
      noun: $scope.noun,
      adj: $scope.adjective,
      adv: $scope.adverb,
      pron: $scope.pronoun,
      propn: $scope.propernoun
    }
    myService.valueGetter(addedValues);
  }
  console.log("This is the form controller.");
});
