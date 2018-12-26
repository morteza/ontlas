'use strict';
var app = angular.module('ontlas');

app.controller('DLQueryCtrl', function ($scope, $rootScope, $http, SearchService) {

    $scope.submit = function(dl) {
      //TODO change to the deployed ontlas.server
      $http.post("/api/v1/ontology/query/dl",dl.query).then(function(res){
        $scope.results = res.data;
      });
    };
    $rootScope.currentSearchLabel = "دانش‌نامه";
  });

app.controller('ShowActiveOntologyCtrl', function ($scope, $rootScope, $http, $route, $window) {
  $rootScope.currentSearchLabel = "آنتولوژی فعال";

  // LIST active ontology details
  //TODO change to the deployed ontlas.server
  $http.get('/api/v1/ontology/active').then(function(result){
    $scope.ontology = result.data;
  });
});

app.controller('UploadOntologyCtrl', function ($scope, $rootScope, $route, $http, $window, $location) {
  $rootScope.currentSearchLabel = "آنتولوژی‌ها";

  $scope.payload = {};
  $scope.licenses =
  [
    {
      value:"MIT",
      title:"مجوز MIT"
    },
    {
      value: "APACHE",
      title: "مجوز آپاچی نسخهٔ ۲"
    }
  ];

  $('.ui.active.checkbox').checkbox({
    onChecked: function() {
      $scope.payload.active = true;
    },
    onUnchecked: function() {
      $scope.payload.active = false;
    }
  });

  $scope.uploadForm = function() {
    var payloadData = new FormData();

    for (var key in $scope.payload) {
      payloadData.append(key, $scope.payload[key]);
    }

    payloadData.set('owlFile', $('input[type=file]')[0].files[0]);

    $http({
      //TODO change to the deployed ontlas.server
      url: '/api/v1/ontology/',
      method: 'POST',
      data: payloadData,
      headers: { 'Content-Type': undefined },
      transformRequest: angular.identity
    }).then(function(result) {
      $location.path("/admin/ontologies");
      $window.location.reload();
    });
  };

});

app.controller('ListOntologiesCtrl', function ($scope, $rootScope, $http, $route, $window) {

  $rootScope.currentSearchLabel = "آنتولوژی‌ها";

  // LIST ALL ontologies
  //TODO change to the deployed ontlas.server
  $http.get('/api/v1/ontology/').then(function(result){
    $scope.ontologies = result.data;
  });

  // DELETE an ontology
  //TODO change to the deployed ontlas.server
  $scope.remove = function(id) {
    $http.delete('/api/v1/ontology/' + id).then(function(result) {
      //$route.reload();
      $window.location.reload();
    });
  };

  //TODO change to the deployed ontlas.server
  $scope.activate = function(id) {
    $http.post('/api/v1/ontology/' + id + '/activate').then(function(result) {
      $window.location.reload();
    });
  };

  //TODO change to the deployed ontlas.server
  $scope.deactivate = function(id) {
    $http.post('/api/v1/ontology/' + id + '/deactivate').then(function(result) {
      $window.location.reload();
    });
  };



});
