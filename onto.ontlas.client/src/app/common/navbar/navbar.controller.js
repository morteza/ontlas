class NavbarController {

  constructor($mdDialog, $state, ConfigService, AuthService) {
    "ngInject";
    this.searchQuery = '';
    this.$state = $state;
    this.$mdDialog = $mdDialog;
    this.AuthService = AuthService;
    this.ConfigService = ConfigService;
  }

  login() {
    console.log('nexting...');
  }

  logout() {
    //TODO call LoginService.logout() to send a request to the server.
    console.log("Logging out...");
    this.AuthService.cleanCredentials();
    this.$state.go('home');
  }

  showHelpSidenav() {
    this.ConfigService.showHelpSidenav = true;
  }

  showSignupModal(event) {
    console.log('Hello signup in scope');
    this.$mdDialog.show({
      contentElement: '#signupModal',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose: true
    });
  };

}

export default NavbarController;
