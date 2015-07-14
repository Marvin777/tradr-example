'use strict';

/**
 * @ngdoc function
 * @name webProjectApp.controller:VerkaufsanzeigeCtrl
 * @description
 * # VerkaufsanzeigeCtrl
 * Controller of the webProjectApp
 */
angular.module('webProjectApp')
  .controller('VerkaufsanzeigeCtrl', function ($scope, $location) {

    /**
     * Fuege neue Anzeige hinzu
     * Aktuell: Route in eine neue View zum Verkaufsanzeigen aufgeben
     */
    $scope.anzeigeAufgeben = function () {
      $location.path('verkaufsanzeigen');
    };
  });
