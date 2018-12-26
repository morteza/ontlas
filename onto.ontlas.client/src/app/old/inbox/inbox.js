'use strict';
var app = angular.module('ontlas');

app.controller('InboxCtrl', function ($scope) {
    $scope.messages = [{title:'واسط کاربری',postedAt:'2/2/2017'}];
    $scope.new = function() {
      $scope.message = {"_id":"123"};
      $('#newMessageModal').modal('show');
    }

    $scope.send = function() {
    }

    $scope.remove = function() {
      console.log('removing...');
    };

    $scope.show = function() {
      console.log('viewing message...');
    };

});
