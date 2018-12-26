'use strict';
var app = angular.module('ontlas');
/**
 * @ngdoc function
 * @name ontlas.controller:WikiCtrl
 * @description
 * # WikiCtrl
 * Controller of the ontlas
 */
app.controller('WikiCtrl', function ($scope, $routeParams, $http) {
    //OntologyService.all();
    $scope.iri = $routeParams.iri;

    $http.get('/api/v1/ontology/'+$scope.iri+"/label").then(function(result) {
      $scope.label = result.data.label;
    });

    $http.get('/api/v1/cms/iri/'+$scope.iri).then(function(result) {
      console.log(result.data);
      $scope.posts = result.data;
    });

    // LIST ALL pages
    $http.get('/api/v1/ontology/'+$scope.iri+"/subclasses").then(function(result){
      $scope.subClasses = result.data;
    });

  });
