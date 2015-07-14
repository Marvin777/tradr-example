'use strict';

/**
 * @ngdoc function
 * @name webProjectApp.controller:AdminCtrl
 * @description
 * Zeigt alle User an, folgen sollen Statistiken
 * # AdminCtrl
 * Controller of the webProjectApp
 */

angular.module('webProjectApp')
  /* Service location: Wichtig für das Routing der Views bei Button-Clicks */
  .controller('AdminCtrl', function ($scope, $location, $route, Datenhaltung){
            $scope.myService = Datenhaltung;
            $scope.users = $scope.myService.getAllUser();
            if(!$scope.myService.isAdmin){
                //Wenn kein Admin

            }
            $scope.loeschen= function(name){
                $scope.myService.deleteUser(name);
                $route.reload();
            }
  })

  // Eigene Direktive, die eine Tabelle ueber alle Benutzer generiert
  .directive('fullUserData', function() {
     return {
           restrict: 'E', //auf Elemente in html beschränkt, hier <full-user-data>
//           scope: {userlist: '='}, //array wird mit userlist verknüpft
           template:
         '<table class="table table-striped"><thead><tr> <th>User Name</th><th>E-Mail</th><th>Passwort</th></tr></thead><tbody><tr ng-repeat="user in users"> <td>{{user.name}}</td> <td>{{user.email}}</td> <td>{{user.password}}</td><td><input class="btn btn-primary" type="submit" ng-click="loeschen(\'{{user.name}}\')" name="loeschen" value="Löschen"></td></tr></tbody></table>'
     }; //Ausgabe der kompletten Tabelle
  });
