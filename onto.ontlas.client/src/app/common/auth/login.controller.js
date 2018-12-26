'use strict';

class LoginController {
  constructor ($state, $mdToast, LoginService) {
    "ngInject";
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.loginService = LoginService;
    this.loginInProgress = false;
  }

  login () {
    this.loginInProgress = true;
    this.loginService.login(this.username, this.password).then(
      () => {
        this.$mdToast.hide();
        this.loginInProgress = false;
        this.$state.go('dashboard');
      },
      (error) => {
        this.loginInProgress = false;
        this.showErrors("خطا در ورود به سامانه");
      }
    );
  }

  signup() {
    this.loginInProgress = true;
    this.fullName = this.name + " " + this.familyName;
    this.loginService.signup(this.fullName, this.username, this.password).then(
      () => {
        this.$mdToast.hide();
        this.loginInProgress = false;
        this.$state.go('login');
      },
      (error) => {
        this.loginInProgress = false;
        this.showErrors("خطا در ثبت‌نام در سامانه");
      }
    );
  }

  showErrors (error) {
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent(error)
        .position('end')
        .hideDelay(10000)
    );
    this.errors = error;
  }
}

export default LoginController;
