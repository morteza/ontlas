class SupportController {

  constructor($resource, CmsService, ConfigService) {
    "ngInject";

    this.CmsService = CmsService;
    this.api = CmsService.api;
    this.name = 'cms';
    this.refresh();
  }

  refresh() {
    this.documents = this.api.get(this.query);
  }

}

export default SupportController;
