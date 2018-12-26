import angular from 'angular';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';
import OntologiesComponent from './ontologies.component';
import OntologiesEdit from './edit/edit';
import OntologiesService from './ontologies.service';

import 'angular-material-data-table';
import 'angular-material-data-table/dist/md-data-table.min.css';
import '../../common/datatable-rtl.less';

let ontologiesModule = angular.module('ontologies', [
  ngResource,
  uiRouter,
  'md.data.table',
  OntologiesEdit.name
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('ontologies', {
      url: '/ontologies',
      component: 'ontologies',
      permissions: ['list_ontologies']
    });

  $urlRouterProvider.otherwise('/');

})

.component('ontologies', OntologiesComponent)
.factory("OntologiesService", OntologiesService.factory);

export default ontologiesModule;
