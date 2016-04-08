'use strict';

/**
 * @ngdoc overview
 * @name guitercenterApp
 * @description
 * # guitercenterApp
 *
 * Main module of the application.
 */
angular
  .module('guitercenterApp', [
    'ngRoute',
    'ngTouch',
    'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/product', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl',
        controllerAs: 'summary'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
