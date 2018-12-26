import marked from 'marked';

class editController {
  constructor($scope, $sce, $state, $stateParams, CmsService, ConfigService) {
    "ngInject";

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false, // if false -> allow plain old HTML ;)
      smartLists: true,
      smartypants: false
    });
    this.marked = marked;

    this.$state = $state;
    this.$sce = $sce;
    this.ConfigService = ConfigService;
    this.CmsService = CmsService;
    this.api = CmsService.api;
    this.payload = {}; //WORKAROUND
    this.payload.content = ''; //WORKAROUND
    if ($stateParams.id) {
      this.payloadId = $stateParams.id;
      this.payload = this.api.get({id:this.payloadId});
    }

    this.types = CmsService.getDocumentTypes();
    
    var self = this;

    $scope.$watch(() => this.payload.content, function (nv, ov) {
      self.updateMarkdownPreview();
    });
  }

  submit() {
    //TODO validate
    if (this.payloadId) {
      this.api.update(this.payload);
    } else {
      this.api.save(this.payload);
    }
    this.$state.go('cms');
  }

  updateMarkdownPreview() {
    this.contentHtml = this.marked(this.payload.content);
    this.contentHtml = this.$sce.trustAsHtml(this.contentHtml);
  }

  cancel() {
    this.$state.go('cms');
  }
}

export default editController;
