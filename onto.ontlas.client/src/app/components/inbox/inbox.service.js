'use strict';

class CmsService {
  constructor ($resource, $http, ConfigService) {
    "ngInject";
    this.$resource = $resource;
    this.$http = $http;
    this.ConfigService = ConfigService;
    this.api = $resource(ConfigService.API_BASE + '/cms/:id',{id:'@id'},{
      update:{
        method:'PUT'
      }
    });

  }

  exists (id) {
    return true;
  }

  static factory($resource, $http, ConfigService) {
    return new CmsService($resource, $http, ConfigService);
  }

}

CmsService.factory.$inject = ['$resource','$http','ConfigService'];

export default CmsService;
