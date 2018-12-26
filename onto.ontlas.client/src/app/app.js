import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-material-data-table';
import 'angular-material-data-table/dist/md-data-table.min.css';
import './common/datatable-rtl.less';

import uiRouter from 'angular-ui-router';
import Auth from './common/auth/auth';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngSanitize from 'angular-sanitize';

import 'normalize.css';
import 'angular-material/angular-material.min.css';
import './app.less';

angular.module('app', [
    uiRouter,
    ngSanitize,
    'ngMaterial',
    'md.data.table',
    Auth.name,
    Common.name,
    Components.name
  ])
  .run(($rootScope, $state) => {
    "ngInject";

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {location: 'replace'})
      }
    });
  })
  .config(($locationProvider,$mdIconProvider,$mdThemingProvider/*,$mdBiDirectionalProvider*/) => {
    "ngInject";

    //$mdIconProvider.defaultIconSet('assets/img/mdi.svg');
    //$mdIconProvider.fontSet('md', 'material-icons');
    $locationProvider.html5Mode(true).hashPrefix('!');
    //$mdBiDirectionalProvider.rtlMode(true);
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  })
  .component('app', AppComponent);
