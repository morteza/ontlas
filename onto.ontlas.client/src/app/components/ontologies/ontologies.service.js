'use strict';

class OntologiesService {
  constructor ($resource, $http, ConfigService) {
    "ngInject";
    this.$resource = $resource;
    this.$http = $http;
    this.ConfigService = ConfigService;
    this.api = $resource(ConfigService.API_BASE + '/ontologies/:id',{id:'@id'},{
      update:{
        method:'PUT'
      }
    });

  }

  exists (id) {
    return true;
  }

  static factory($resource, $http, ConfigService) {
    return new OntologiesService($resource, $http, ConfigService);
  }

}

OntologiesService.factory.$inject = ['$resource','$http','ConfigService'];

export default OntologiesService;
