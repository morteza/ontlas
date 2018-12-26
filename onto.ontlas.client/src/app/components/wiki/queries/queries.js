import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import QueriesComponent from './queries.component';

let QueriesModule = angular.module('queries', [
  ngResource,
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('queries', {
      url: '/queries/:iri',
      component: 'queries',
      permissions: ['queries']
    })
    .state('queries/home', {
      url: '/queries',
      redirectTo: 'queries',
      params: {iri: ''}
    });

})

.component('queries', QueriesComponent)
.name;

export default QueriesModule;
