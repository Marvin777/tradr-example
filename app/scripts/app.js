'use strict';

/**
 * @ngdoc overview
 * @name webProjectApp
 * @description
 * # webProjectApp
 *
 * Main module of the application.
 */
angular
  .module('webProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/willkommen.html',
        controller: 'WillkommenCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin_statistik_a.html',
        controller: 'AdminCtrl'
      })
      .when('/anmelden', {
        templateUrl: 'views/anmelden.html',
        controller: 'UserCtrl'
      })
      .when('/benutzerdaten', {
        templateUrl: 'views/benutzerdaten.html',
        controller: 'BenutzerdatenCtrl'
      })
      .when('/nachrichtSchreiben', {
        templateUrl: 'views/nachricht_schreiben.html',
        controller: 'NachrichtSchreibenCtrl'
      })
      .when('/nachrichten', {
        templateUrl: 'views/nachrichten.html',
        controller: 'NachrichtenCtrl'
      })
      .when('/registrieren', {
        templateUrl: 'views/registrieren.html',
        controller: 'UserCtrl'
      })
      .when('/suchanzeige', {
        templateUrl: 'views/suchanzeige.html',
        controller: 'SuchanzeigeCtrl'
      })
      .when('/suchanzeigen', {
        templateUrl: 'views/suchanzeigen.html',
        controller: 'SuchanzeigenCtrl'
      })
      .when('/verkaufsanzeige', {
        templateUrl: 'views/verkaufsanzeige.html',
        controller: 'VerkaufsanzeigeCtrl'
      })
      .when('/verkaufsanzeigen', {
        templateUrl: 'views/verkaufsanzeigen.html',
        controller: 'VerkaufsanzeigenCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
