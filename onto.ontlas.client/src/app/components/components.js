import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import About from './about/about';
import Ontologies from './ontologies/ontologies';
import Cms from './cms/cms';
import Wiki from './wiki/wiki';
import WikiSearch from './wiki/search/search';
import WikiQueries from './wiki/queries/queries';

import Home from './home/home';

let ComponentModule = angular.module('app.components', [
  Dashboard,
  Home,
  About,
  Ontologies.name,
  Wiki,
  WikiSearch,
  WikiQueries,
  Cms
]);

export default ComponentModule;
