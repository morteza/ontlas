import angular from 'angular';
import uiRouter from 'angular-ui-router';
import editComponent from './edit.component';
import 'ng-wig/dist/ng-wig';
import '../../../../assets/css/ng-wig.css';

let editModule = angular.module('app.cms.edit', [
  uiRouter,
  'ngWig'
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('cms/edit', {
      url: '/cms/edit/:id',
      component: 'cmsEdit',
      permissions: ['cms_edit']
  });

  $urlRouterProvider.otherwise('/');

})

.component('cmsEdit', editComponent);

export default editModule;
