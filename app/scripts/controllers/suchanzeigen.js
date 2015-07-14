'use strict';

/**
 * @ngdoc function
 * @name webProjectApp.controller:SuchanzeigenCtrl
 * @description
 * # SuchanzeigenCtrl
 * Controller of the webProjectApp
 */
angular.module('webProjectApp')
  /* Service location: Wichtig für das Routing der Views bei Button-Clicks */
  .controller('SuchanzeigenCtrl', function ($scope, $location) {
    $scope.suchanzeigen = [
      {bezeichnung: 'iPhone 4', preis: 400},
      {bezeichnung: 'Lenovo Laptop, min. i3 und 4GB RAM', preis: 350},
      {bezeichnung: 'Samsung Galaxi i9001', preis: 30},
      {bezeichnung: 'Farbdrucker, Tinte', preis: 20},
      {bezeichnung: 'Toaster', preis: 19},
      {bezeichnung: 'Bürostuhl in schwarz', preis: 45.99}
    ];

    /**
     * Benutzer moechte Kontakt zu anderen Nutzer aufbauen
     */
    $scope.nachrichtSchreiben = function () {
      $location.path('nachrichtSchreiben');
    };

    /**
     * Benutzer moechte ein Angebot machen
     */
    $scope.angebot_machen = function () {
      $location.path('nachrichtSchreiben');
    }
  });
