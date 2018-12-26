'use strict';

class SignUpController {
  constructor ($state, LoginService) {
    "ngInject";
    this.$state = $state;
    this.loginService = LoginService;
    this.signUpInProgress = false;
  }

  signUp () {
    this.signUpInProgress = true;
    this.loginService.signUp(this,fullname, this.email, this.password).then(
      () => {
        this.signUpInProgress = false;
        this.$state.go('wiki');
      },
      (error) => {
        this.signUpInProgress = false;
        this.showErrors(error);
      }
    );
  }

  showErrors (error) {
    this.errors = error;
  }
}

export default SignUpController;
