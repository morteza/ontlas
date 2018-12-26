'use strict';
var app = angular.module('ontlas');


app.controller('HomeCtrl', function ($scope, $rootScope, SearchService) {
  console.log("[1]");

    //OntologyService.all();
    $scope.services = [
      {title:'User Interface',status:'on'},
      {title:'Users Managment',status:'off'},
      {title:'مدیریت آنتولوژی‌ها',status:'on'},
      {title:'مدیریت محتوا',status:'on'},
      {title:'دانش‌نامه',status:'on'},
      {title:'مدیریت و اتصالِ خزنده‌ها',status:'on'},
      {title:'صندوق پیام‌رسانی',status:'warning'},
    ];
    $rootScope.currentSearchLabel = "دانش‌نامه";
  });
