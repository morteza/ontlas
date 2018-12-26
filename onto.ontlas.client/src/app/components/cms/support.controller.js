class SupportController {

  constructor($resource, $state, CmsService, ConfigService) {
    "ngInject";

    this.CmsService = CmsService;
    this.api = CmsService.api;
    this.$state = $state;
    this.refresh();
  }

  refresh() {
    this.documents = this.CmsService.query({type: "SUPPORT"});
  }

  view(id) {
    this.$state.go('cms/edit',{id:id});
  }

}

export default SupportController;
