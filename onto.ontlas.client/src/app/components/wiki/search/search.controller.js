class SearchController {

  constructor($resource, $stateParams, ConfigService) {
    "ngInject";

    this.search = this.search.bind(this);
    this.success = this.success.bind(this);

    this.api = $resource(ConfigService.API_BASE + '/wiki/search',
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
      limit: 10,
      page: 1
    };

    this.isLoading = false;

    if ($stateParams.query!==undefined) {
      this.params.query = $stateParams.query;
      this.search();
    }

  }

  success(results) {
    console.log(results);
    this.results = results;
    this.isLoading = false;
  }

  search() {
    this.isLoading = true;
    this.promise = this.api.get(this.params, this.success).$promise;
  }

}

export default SearchController;
