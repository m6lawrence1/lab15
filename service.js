var app = angular.module('myModule');

app.service('myService', function() {
  var storedValues = {};
  return {
    valueGetter: function(vals) {
      storedValues = vals;
      console.log(storedValues);
    },
    valueSetter: function() {
      return storedValues;
    }
  };
});
