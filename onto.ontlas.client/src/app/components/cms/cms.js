import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import CmsComponent from './cms.component';
import SupportComponent from './support.component';
import CmsEdit from './edit/edit';
import CmsService from './cms.service';

import 'angular-material-data-table';
import 'angular-material-data-table/dist/md-data-table.min.css';
import '../../common/datatable-rtl.less';

let CmsModule = angular.module('cms', [
  ngResource,
  uiRouter,
  'md.data.table',
  CmsEdit.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('cms', {
      url: '/cms',
      component: 'cms',
      permissions: ['cms']
    })
    .state('support', {
      url: '/support',
      component: 'support',
      permissions: ['view_support']
  });;

  $urlRouterProvider.otherwise('/');

})

.component('cms', CmsComponent)
.component('support', SupportComponent)
.factory("CmsService", CmsService.factory)
.name;

export default CmsModule;
