import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import helpComponent from './help.component';

let helpModule = angular.module('help', [
  ngResource,
  uiRouter
])

.component('help', helpComponent);

export default helpModule;
