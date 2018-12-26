class WikiController {

  constructor($resource, $stateParams, CmsService, ConfigService) {
    "ngInject";

    this.CmsService = CmsService;
    this.getDocuments = this.getDocuments.bind(this);
    this.success = this.success.bind(this);

    this.iri = $stateParams.iri;
    if (this.iri===undefined || this.iri==='')
      this.iri = "owl:Thing";

    this.api = $resource(ConfigService.API_BASE + '/wiki/:iri',
      {
        iri:'@iri'
      },{
      query: {
        method: 'GET',
        isArray: false
      }
    });

    this.query = {
      iri: this.iri,
      order: 'modifiedAt',
      limit: 10,
      page: 1
    };

    this.getDocuments();
  }

  success(documents) {
    console.log("docs: ", documents);
    this.documents = documents;
  }

  getDocuments() {
    console.log(this.iri);
    this.promise = this.api.get(this.query, this.success).$promise;
  }

}

export default WikiController;
