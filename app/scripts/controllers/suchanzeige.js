'use strict';

/**
 * @ngdoc function
 * @name webProjectApp.controller:SuchanzeigeCtrl
 * @description
 * # SuchanzeigeCtrl
 * Controller of the webProjectApp
 */
angular.module('webProjectApp')
  // Service "location": Wichtig für das Routing der Views (bei Button-Clicks)
  .controller('SuchanzeigeCtrl', function ($scope, $location) {

    $scope.anzeigeAufgeben = function () {
      $location.path('suchanzeigen');
    };
  });
