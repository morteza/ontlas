class OntologiesController {

  constructor($state, $resource, OntologiesService, ConfigService) {
    "ngInject";

    this.$state = $state;
    this.OntologiesService = OntologiesService;
    this.api = OntologiesService.api;
    this.getDatasets = this.getDatasets.bind(this);
    this.success = this.success.bind(this);

    this.query = {
      order: 'modifiedAt',
      limit: 10,
      page: 1
    };
    this.onPaginate = this.onPaginate.bind(this);
    this.getDatasets();
  }

  success(datasets) {
    this.datasets = datasets;
  }

  getDatasets() {
    console.log('reloading...');
    this.promise = this.api.get(this.query, this.success).$promise;
  }

  onPaginate() {
    this.getDatasets();
  }

  edit(id) {
    this.$state.go('ontologies/edit', {id: id});
  }

  remove(id) {
    console.log("TODO: navigate to remove page...", id)
  }
}

export default OntologiesController;
