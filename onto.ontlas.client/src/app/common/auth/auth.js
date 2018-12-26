'use strict';

import AuthInterceptor from './auth.interceptor';
import AuthService from './auth.service';
import LoginService from './login.service';
import ConfigService from '../config.service';

import LoginCtrl from './login.controller';
import SignUpCtrl from './signup.controller';

let authModule = angular.module('app.auth', ['ui.router'])
.service('AuthService', AuthService)
.service('LoginService', LoginService)
.factory('AuthInterceptor', AuthInterceptor.factory)
.controller('LoginCtrl', LoginCtrl)
.controller('SignUpCtrl', SignUpCtrl)
.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/common/auth/login.html',
      controller: 'LoginCtrl as $ctrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/common/auth/signup.html',
      controller: 'SignUpCtrl as $ctrl'
    });
    
  $urlRouterProvider.otherwise('/');
})
.config(($httpProvider) =>
  $httpProvider.interceptors.push('AuthInterceptor')
);


export default authModule;
