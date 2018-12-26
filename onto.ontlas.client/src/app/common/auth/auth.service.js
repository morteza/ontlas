'use strict';

const TOKEN_KEY = 'ontlas.token';

class AuthService {
  constructor ($window) {
    "ngInject";
    this.$window = $window;
  }

  isAuthenticated () {
    var credentials;

    credentials = this.getCredentials();

    return !!credentials.token;
  }

  setCredentials (token) {
    this.$window.localStorage.setItem(TOKEN_KEY, token);
  }

  cleanCredentials () {
    this.$window.localStorage.removeItem(TOKEN_KEY);
  }

  getCredentials () {
    var token = this.$window.localStorage.getItem(TOKEN_KEY);
    return {
      token: token
    };
  }
}

export default AuthService;
