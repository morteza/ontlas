import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import SearchComponent from './search.component';

let SearchModule = angular.module('search', [
  ngResource,
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('search', {
      url: '/search?query',
      component: 'search',
      permissions: ['search']
    })
    .state('search/home', {
      url: '/search',
      redirectTo: 'search',
      params: {query: ''}
    });

})

.component('search', SearchComponent)
.name;

export default SearchModule;
