'use strict';
var app = angular.module('ontlas');

app.directive('ontlasFooter', function() {
  return {
    restrict: 'E',
    templateUrl : 'app/partials/footer.html',
    transclude : true
  };
});
