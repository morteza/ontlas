'use strict';

class LoginService {
  constructor ($http, $q, $state, ConfigService, AuthService) {
    "ngInject";
    this.$http = $http;
    this.$q = $q;
    this.$state = $state;
    this.configService = ConfigService;
    this.authService = AuthService;

    // Authenticated
    //TODO redirect to user home if she is not an admin.
    if (AuthService.isAuthenticated() &&
        ($state.current.name === 'home' || $state.current.name === 'login')) {
      $state.go('dashboard');
    }

    //NOT Authenticated
    if (!AuthService.isAuthenticated() && $state.current.name !== 'home' &&
        $state.current.name !== 'login') {
      $state.go('login');
    }
  }

  login (username, password) {
    this.authService.cleanCredentials();
    //TODO sign password (?) or send it via HTTPS
    return this.$http.post(`${this.configService.LOGIN_URL}`, {
      'username': username,
      'password': password
    }).then(
      (result) => {
        this.authService.setCredentials(result.data);
      },
      (error) => {
        console.error(error);
        this.$q.reject(error.data.non_field_errors[0])
      });
  }

  signup (name, username, password) {
    this.authService.cleanCredentials();
    //TODO sign password (?) or send it via HTTPS
    return this.$http.post(`${this.configService.SIGNUP_URL}`, {
      'name': name,
      'username': username,
      'password': password
    }).then(
      (result) => {
        this.authService.setCredentials(result.data);
      },
      (error) => {
        console.error(error);
        this.$q.reject(error.data.non_field_errors[0])
      });
  }

  logout () {
    return this.$http.get(`${this.configService.LOGOUT_URL}`).then(
      (result) => {
        this.authService.cleanCredentials();
        this.$state.go('home');
      },
      (error) => {
        this.authService.cleanCredentials();
        this.$q.reject(error.data);
      });
  }
}

export default LoginService;
