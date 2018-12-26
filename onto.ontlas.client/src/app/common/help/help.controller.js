class HelpController {

  constructor($transitions, $state, $mdSidenav, AuthService, CmsService, ConfigService) {
    "ngInject";

    console.log("Sidenav controller...");
    this.$state = $state;
    this.CmsService = CmsService;
    this.api = CmsService.api;
    this.$mdSidenav = $mdSidenav;
    this.ConfigService = ConfigService;

    this.$transitions = $transitions;
    $transitions.onSuccess({}, this.reloadHelpDocuments());
  }

  reloadHelpDocuments() {
    return () => {
      var iri = this.$state.current.name;
      this.documents = this.CmsService.query({type:"INLINE_HELP",iri: iri});
    }
  }

  close() {
    this.ConfigService.showHelpSidenav = false;
    this.$mdSidenav('help-sidenav').close()
      .then(function () {
        console.log("Help sidebar is closed.");
    });
  }

  open() {
    this.ConfigService.showHelpSidenav = true;
    this.$mdSidenav('help-sidenav').open()
      .then(function () {
        console.log("Help sidebar is opened.");
    });
  }

}

export default HelpController;
