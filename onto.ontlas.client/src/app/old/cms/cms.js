'use strict';
var app = angular.module('ontlas');

app.controller('CmsAdminCtrl', function ($scope, $http, $route, $window) {

    // LIST ALL pages
    $http.get('/api/v1/cms/').then(function(result){
      $scope.posts = result.data;
    });

    // DELETE A page
    $scope.remove = function(id) {
      $http.delete('/api/v1/cms/' + id).then(function(result) {
        //$route.reload();
        $window.location.reload();
      });
    };

    // EDIT A page
    $scope.edit = function(id) {
      $http.get('/api/v1/cms/' + id).then(function(result) {
        $scope.post = result.data;
        $('#editModal').modal('show');
      });
    };

    $scope.new = function() {
      $scope.post = {};
      $scope.post.type=0;
      $('#editModal').modal('show');
    };

    $scope.submit = function() {
      $('#editModal').modal('hide');
      if ($scope.post._id==null) {
        $http.post('/api/v1/cms/',$scope.post).then(function(res) {
          //$route.reload();
          $window.location.reload();
        });
      } else {
        var id = $scope.post._id;
        console.log('Post: ' + $scope.post);
        $http.put('/api/v1/cms/'+id, $scope.post).then(function(res) {
          //$route.reload();
          $window.location.reload();
        });
      }
    };


  });
