import angular from 'angular';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Help from './help/help';
import ConfigService from './config.service';
import JalaliDateFilter from './jalali.filter';
import LimitToWordsFilter from './limit-to-words.filter';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Footer.name,
  Help.name
])

.value('ConfigService', ConfigService)
.filter('JalaliDate', () => JalaliDateFilter.factory)
.filter('limitToWords', () => LimitToWordsFilter.factory);

export default commonModule;
