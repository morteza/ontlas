import angular from 'angular';
import uiRouter from 'angular-ui-router';
import editComponent from './edit.component';
import 'ng-wig/dist/ng-wig';
import '../../../../assets/css/ng-wig.css';

let editModule = angular.module('app.ontologies.edit', [
  uiRouter,
  'ngWig'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('ontologies/edit', {
      url: '/ontologies/edit',
      component: 'ontologiesEdit',
      permissions: ['ontologies_edit']
  });

  $urlRouterProvider.otherwise('/');

})

.component('ontologiesEdit', editComponent);

export default editModule;
