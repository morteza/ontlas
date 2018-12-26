'use strict';

class CmsService {
  constructor ($resource, $http, ConfigService) {
    "ngInject";
    this.$resource = $resource;
    this.$http = $http;
    this.ConfigService = ConfigService;
    this.api = $resource(ConfigService.API_BASE + '/cms/:id',
      {
        id:'@id'
      },{
      update:{
        method:'PUT'
      },
      query: {
        method: 'GET',
        isArray: false
      }
    });

  }

  exists (id) {
    return true;
  }

  query(q) {
    return this.api.query(q);
  }

  getDocumentTypes() {
    //TODO Load document types from server
    return [
      {
        "title":"پُست بلاگ",
        "value":"BLOG"
      },
      {
        "title":"مقالهٔ پشتیبانی",
        "value":"SUPPORT"
      },
      {
        "title":"خبر",
        "value":"NEWS"
      },
      {
        "title":"محتوای تکمیلی دانش",
        "value":"SUPPLEMENTARY"
      },
      {
        "title":"راهنمای داخلی",
        "value":"INLINE_HELP"
      }
    ];
    return types;
  }

  static factory($resource, $http, ConfigService) {
    return new CmsService($resource, $http, ConfigService);
  }

}

CmsService.factory.$inject = ['$resource','$http','ConfigService'];

export default CmsService;
