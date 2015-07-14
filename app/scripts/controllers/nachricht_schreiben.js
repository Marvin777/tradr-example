'use strict';

/**
 * @ngdoc function
 * @name webProjectApp.controller:NachrichtSchreibenCtrl
 * @description
 * # NachrichtSchreibenCtrl
 * Controller of the webProjectApp
 */
angular.module('webProjectApp')
  /* Service location: Wichtig für das Routing der Views bei Button-Clicks */
  .controller('NachrichtSchreibenCtrl', function ($scope, $location) {

    /**
     * Nachricht an Empfaenger senden
     */
    $scope.senden = function () {
      $location.path('nachrichten');
    };
  });
