'use strict';
var app = angular.module('ontlas');

app.directive('ontlasHeader', ['$rootScope',function($rootScope) {
  return {
    restrict: 'E',
    templateUrl : 'app/partials/header.html',
    transclude : true,
    link: function (scope, element, attr) {
      scope.currentSearchLabel = $rootScope.currentSearchLabel;
      scope.currentSearchIRI = $rootScope.currentSearchIRI;
    },
    controller: function($scope,$rootScope) {
      $('.ui.dropdown.item').dropdown();

      $.getJSON("/api/v1/ontology/topics", function(data) {
        for (var i=0;i<data.length;i++) {
          $('.wiki.menu').append(
            '<a class="icon item" href="#!/wiki/'+ data[i].class +'">'
            + data[i].label
            + '</a>');
        }
      });

    }
  };
}]);
