'use strict';

/**
 * @ngdoc function
 * @name webProjectApp.controller:VerkaufsanzeigenCtrl
 * @description
 * # VerkaufsanzeigenCtrl
 * Controller of the webProjectApp
 */
angular.module('webProjectApp')
  .controller('VerkaufsanzeigenCtrl', function ($scope, $location) {

    /**
     * Datensaetze
     * @type {{artikel: string, preis: number, beschreibung: string}[]}
     */
    $scope.verkaufsanzeigen = [
      {artikel: 'iPhone 4', preis: 389.45, beschreibung: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'},
      {artikel: 'Artikel XYZ', preis: 213.99, beschreibung: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
      {artikel: 'Artikel XYZ', preis: 0, beschreibung: 'At vero eos et accusam et justo duo dolores et ea rebum.'},
      {artikel: 'Artikel XYZ', preis: 210, beschreibung: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
    ];

    /**
     * Benutzer moechte Kontakt mit Verkaeufer aufbauen
     */
    $scope.nachrichtSchreiben = function () {
      $location.path('nachrichtSchreiben');
    };

    /**
     * Wird ein Artikel gekauft, so wird dieser auf den Datensaetzen entfernt
     * @param index
     */
    $scope.kaufen = function (index) {
      $scope.verkaufsanzeigen.splice(index, 1);
    }
  })

  /*
   * Eigene Direktive: Anzeige formatiert den Preis. Ist der Preis 0 Euro, so wird dieser als kostenlos gefuehrt.
   * Benutzung: <preis value="Hier steht der Preis"/>
   */
  .directive('preis', function(){
    return {
      // Direktive kann nur als Element (Tag) verwendet werden
      restrict: 'E',
      scope: {
        value: '='
      },
      template:
        '<span ng-show="value == 0" style="color: green; font-style: italic">kostenlos</span>' +
        '<span ng-show="value > 0">{{value | currency:""}} EUR</span>'
    };
  });
