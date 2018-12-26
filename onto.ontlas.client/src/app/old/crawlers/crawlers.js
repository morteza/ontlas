'use strict';
var app = angular.module('ontlas');

app.controller('SubmitCrawledDataCtrl', function ($scope, $http, $route, $window) {
  console.log("crawled data...");
});


app.controller('CrawlersAdminCtrl', function ($scope, $rootScope, $http, $route, $window) {

  $rootScope.currentSearchLabel = "خزنده‌ها";

    // LIST ALL crawlers
    $http.get('/api/v1/crawler/').then(function(result){
      $scope.crawlers = result.data;
    });

    $scope.getListOfCrawlers = function(serverUrl) {
      //TODO get list for IDs from the real server via API.
      var test = true;
      if (!test) {
        $http.get(serverUrl).then(function(result) {
          $scope.crawlerIds = result.data;
        });
      } else {
        $scope.crawlerIds = ["CAPEC","CWE","CVE"];
      }
    };

    $scope.submitCrawledData = function() {
        $window.location = '#!/crawlers/submit';
        $window.location.reload();
    };

    // DELETE A crawler
    $scope.remove = function(id) {
      $http.delete('/api/v1/crawler/' + id).then(function(result) {
        console.log(result.data);
        //$route.reload();
        $window.location.reload();
      });
    };

    // EDIT A crawler
    $scope.edit = function(id) {
      $http.get('/api/v1/crawler/' + id).then(function(result) {
        $scope.crawler = result.data;
        $('#editModal').modal('show');
      });
    };

    // EDIT params
    $scope.editParams = function(id) {
      $http.get('/api/v1/crawler/' + id).then(function(result) {
        $scope.crawler = result.data;
        $scope.crawler.params = $scope.crawler.param.split(',');
        $('#paramsModal').modal('show');
      });
    };

    $scope.new = function() {
      $scope.crawler = {};
      $scope.crawler.type=0;
      $('#editModal').modal('show');
    };

    $scope.submit = function() {
      $('#editModal').modal('hide');
      if ($scope.crawler._id==null) {
        $http.post('/api/v1/crawler/',$scope.crawler).then(function(res) {
          //$route.reload();
          $window.location.reload();
        });
      } else {
        var id = $scope.crawler._id;
        $http.put('/api/v1/crawler/'+id, $scope.crawler).then(function(res) {
          //$route.reload();
          $window.location.reload();
        });
      }
    };


  });
