class CmsController {

  constructor($state, $resource, CmsService, ConfigService) {
    "ngInject";

    this.CmsService = CmsService;
    this.api = CmsService.api;
    this.$state = $state;
    this.getDocuments = this.getDocuments.bind(this);
    this.success = this.success.bind(this);
    this.name = 'cms';
    this.query = {
      order: 'modifiedAt',
      limit: 10,
      page: 1
    };
    this.documentTypes = CmsService.getDocumentTypes();
    this.onPaginate = this.onPaginate.bind(this);
    this.getDocuments();
  }

  success(documents) {
    this.documents = documents;
  }

  getDocuments() {
    console.log('reloading...');
    this.promise = this.api.get(this.query, this.success).$promise;
  }

  onPaginate() {
    this.getDocuments();
  }

  edit(id) {
    this.$state.go('cms/edit', {id: id});
  }

  remove(id) {
    console.log("TODO: navigate to remove page...", id)
  }
}

export default CmsController;
