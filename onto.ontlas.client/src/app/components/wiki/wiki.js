import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import CmsService from '../cms/cms.service';
import WikiComponent from './wiki.component';

let WikiModule = angular.module('wiki', [
  ngResource,
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('wiki', {
      url: '/wiki/:iri',
      component: 'wiki',
      permissions: ['wiki']
    })
    .state('wiki/home', {
      url: '/wiki',
      redirectTo: 'wiki',
      params: {iri: "owl:Thing"}
    });

  $urlRouterProvider.otherwise('/');

})

.component('wiki', WikiComponent)
.name;

export default WikiModule;
