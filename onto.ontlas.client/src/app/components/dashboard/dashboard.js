import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DashboardComponent from './dashboard.component';

import 'chart.js/dist/Chart.bundle.min';
import 'angular-chart.js/dist/angular-chart';

let DashboardModule = angular.module('dashboard', [
  uiRouter,
  "chart.js"
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard'//,
      //permissions: ['dashboard']
  });

  $urlRouterProvider.otherwise('/');

})

.component('dashboard', DashboardComponent)
.name;

export default DashboardModule;
