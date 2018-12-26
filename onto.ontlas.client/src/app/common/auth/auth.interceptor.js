
import AuthService from './auth.service';

// Workaround for not losing the this binding in methods
let self;

class AuthInterceptor {
  constructor ($window, $location, $q, ConfigService, AuthService) {
    "ngInject";
    this.$window = $window;
    this.$location = $location;
    this.$q = $q;
    this.configService = ConfigService;
    this.authService = AuthService;

    self = this;
  }

  request (config) {
    var canceller;
    if (config.url.search(self.configService.API_BASE) !== -1 &&
        self.authService.isAuthenticated()) {
      config.headers.Authorization = `Bearer ${self.authService.getCredentials().token}`;
    } else if (config.url.search(self.configService.API_BASE) !== -1 &&
        (config.url !== self.configService.LOGIN_URL && config.url !== self.configService.SIGNUP_URL)) {
      canceller = self.$q.defer();
      config.timeout = canceller.promise;
      canceller.resolve(`Cancelled request to ${config.url} because we do not have credentials`);
      console.error(`Cancelled request to ${config.url} because we do not have credentials`);
      self.authService.cleanCredentials();
      self.$location.url('/login')
    }
    return config;
  }

  responseError (rejection) {
    if (rejection.config.url.search(self.configService.apiBase) !== -1 &&
        rejection.status === 401) {
      self.authService.cleanCredentials();
      //TODO: redirect using state (uiRouter)
      self.$location.url('/login');
    }
    return self.$q.reject(rejection);
  }


  static factory($window,$location, $q, ConfigService, AuthService) {
    return new AuthInterceptor($window,$location, $q, ConfigService, AuthService);
  }
}

AuthInterceptor.factory.$inject = [
  '$window','$location', '$q', 'ConfigService', 'AuthService'
];

export default AuthInterceptor;
