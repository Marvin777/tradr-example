'use strict';

/**
 * @ngdoc function
 * @name webProjectApp.controller:NachrichtenCtrl
 * @description
 * # NachrichtenCtrl
 * Controller of the webProjectApp
 */
angular.module('webProjectApp')
  // Service location: Wichtig für das Routing der Views bei (Button-Clicks)
  .controller('NachrichtenCtrl', function ($scope, $location, $resource) {

    $scope.messages = [];
    /**
    * get messages
    */
    //$resource.get().success(function(messages){console.log("huhuhuhu"); console.log(messages)} );
    
     var res = $resource('http://localhost:2403/users/login');
    res.save({username:'philipp',password:'philipp'}).
      $promise.then(
      //success
      function( value ){
        console.log("login");
        console.log(value);
        $scope.messages = value;
      },
        
      //error
      function( error ){
        console.log("fehler");}
    );
    
    
    var res = $resource('http://localhost:2403/users/me');
    res.get().
      $promise.then(
      //success
      function( value ){
        console.log("me anfrage");

        console.log(value);
        $scope.messages = value;
      },
      //error
      function( error ){
        console.log("fehler");}
    );
    
//        var res = $resource('http://localhost:2403/users/logout');
//    res.query().
//      $promise.then(
//      //success
//      function( value ){
//        console.log("logout");
//
//        console.log(value);
//        $scope.messages = value;
//      },
//      //error
//      function( error ){
//        console.log("fehler");}
//    );
    



   /* $http.get('http://127.0.0.1:2403/messages')
      .success(function(messages) {
        $scope.loaded = true;
        $scope.messages = messages;
        console.log(messages);
        console.log("huhuhuhu");
      }).error(function(err) {
        console.log("huhuhuhErrosu");
        alert(err);
      });*/
    /**
     * Nachrichtendaten
     * @type {{benutzer: string, date: Date, inhalt: string}[]}
     */
    $scope.nachrichten =[
      {benutzer:'1XYZZ', date:new Date(2014,0,1,10,10,10),inhalt:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'},
      {benutzer:'2XYZ', date:new Date(2014,11,3,14,45,10),inhalt:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
    ];
    $scope.indexAusgewaehlteNachricht = null;
    /**
     * Wählt eine Nachricht aus
     * @param index der Nachricht
     */
    $scope.nachrichtAuswaehlen = function (index) {
      $scope.indexAusgewaehlteNachricht = index;
    };

    /**
     * Verfasse neue Nachricht
     */
    $scope.nachrichtSchreiben = function () {
      $location.path('nachrichtSchreiben');
    };
    /**
     * Vorher ausgewählte Nachricht löschen
     */
    $scope.nachrichtLoeschen = function () {
      $scope.nachrichten.splice($scope.indexAusgewaehlteNachricht, 1);
    };

    /**
     * Antworte auf Nachricht
     */
    $scope.nachrichtAntworten = function () {
      $location.path('nachrichtSchreiben');
    };

  })
    /**
     * Directive <nachricht-verkuerzt nachricht=""> gibt eine Nachricht in Kurzform aus
     * benutzer date und ersten 25 zeichen des Inhalts
     */
  .directive('nachrichtVerkuerzt', function(){
    return {
      restrict: 'E',
      scope: {
        nachricht: '='
      },
      template:'<span ng-show="nachricht!=null">{{nachricht.benutzer}}{{nachricht.date|date:\'dd.MM.yy H:mm\'}} {{nachricht.inhalt | limitTo:25}}...</span>'
    };
  });

