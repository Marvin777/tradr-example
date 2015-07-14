'use strict';

/**
 * @ngdoc function
 * @name webProjectApp.controller:BenutzerdatenCtrl
 * @description
 * # BenutzerdatenCtrl
 * Controller of the webProjectApp
 */
angular.module('webProjectApp')
  .controller('BenutzerdatenCtrl', function ($scope, Datenhaltung) {

    // Fuer Zugriff auf den angemeldeten Benutzer wichtig. Wird fuer die View gebraucht
    $scope.myService = Datenhaltung;
  });
