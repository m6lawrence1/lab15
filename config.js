var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/display',
    {
      controller: 'displayController',
      templateUrl: 'display.html'
    })
    .when('/form',
  {
    controller: 'formController',
    templateUrl: 'form.html'
  })
    .otherwise({redirectTo: '/'});
});
