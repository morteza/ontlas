export default class QueriesController {

  constructor($resource, $http, $stateParams, ConfigService) {
    "ngInject";

    this.list = this.list.bind(this);
    this.success = this.success.bind(this);
    this.$http = $http;
    this.ConfigService = ConfigService;

    this.api = $resource(ConfigService.API_BASE + '/queries/',
      {
        query:'@query'
      },{
      query: {
        method: 'GET',
        isArray: false
      }
    });

    this.params = {
      query: '',
      order: 'modifiedAt',
      limit: 100,
      page: 1
    };

    this.isLoading = false;

    if ($stateParams.iri!==undefined && $stateParams.iri!=='') {
      this.params.query = $stateParams.iri;
      this.details();
    } else {
      this.list();
    }


  }

  details() {
    this.isLoading = true;
    this.showDetails = true;
    var self = this;
    this.$http.get(this.ConfigService.API_BASE + '/ontologies/' + this.params.query + '/label').then((res) => {
      self.title = res.data.title;
      self.description = res.data.description;
    });
    this.$http.get(this.ConfigService.API_BASE + '/queries/' + this.params.query).then(function(res){
      self.results = res.data;
      self.isLoading = false;
    });
  }

  success(results) {
    console.log(results);
    this.results = results;
    this.isLoading = false;
  }

  list() {
    this.isLoading = true;
    this.promise = this.api.get(this.params, this.success).$promise;
  }

}
