/**
 * Created by jungsen on 01.12.14.
 */
'use strict';

/**
 * Erzeugt ein Modul "model" mit dem Controller modelCtrl
 * Die Funktionalitäten sind in der Klasse Model zu finden
 */
var myApp = angular.module('webProjectApp')
  .controller('UserCtrl', function($scope, $filter, $location, Datenhaltung) {

    // Gewaehre Zugriff auf Singleton-Service
    $scope.myService = Datenhaltung;

    $scope.isAlreadyTaken = function(id){
      //var found = $filter('filter')($scope.myService.getAllUser(), {name: id}, true);
      var found = $scope.myService.getUser(id);
      console.log(found);
      if(found.length > 0){
        return true;
      } else {
        return false;
      }
    };

    /**
     * Benutzer anmelden
     * @param username
     * @param pwd
     */
    $scope.anmelden = function(username, pwd){
      var user = $scope.myService.getUser(username);
      console.log(user[0]);
      console.log('Check '+user[0].password+' with '+pwd);
      if(user[0].password === pwd){
        $scope.myService.setAngemeldet(true);
        $scope.myService.setAktUser(username);
        $location.path('#/willkommen');
      }
    };

    /**
     * Benutzer abmelden
     */
    $scope.abmelden = function(){
      $scope.myService.setAngemeldet(false);
    };

    /**
     * Registriere Benutzer, sofern nicht bereits im System vorhanden
     * @param username
     * @param email
     * @param pw1
     * @param pw2
     */
    $scope.tryRegister = function (username, email, pw1, pw2) {
      if (pw1 === pw2) {
        if (!$scope.isAlreadyTaken(username)) {
          $scope.myService.registerUser(username, email, pw1);
          //Datenhaltung.registerUser();
          //  $location.path('#/');
          //$location.path('#/anmelden')
          console.log('reg');
          $location.path('#/anmelden');
        }
        else{
          console.log('not reg - Username vergeben');
          alert('Username vergeben');
        }
      }
      else {
        console.log('not reg - Passwörter stimmen nicht überein');
        alert('Passwörter stimmen nicht überein');
      }
    }

  });
