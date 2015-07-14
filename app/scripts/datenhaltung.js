angular.module('webProjectApp')
  /**
   *  Singelton-Service - Jeder Controller kann diesen Service einbinden und auf die Daten/Methoden zugreifen
   *  In diesem Service werden Daten und entsprechende Funktionen zentral verwaltet
   */
  .factory('Datenhaltung', function ($filter) {

    // Service-Objekt für Setter-Funktionen (siehe Vorlesung)
    var service={};

    // Unterscheidung zwischen Besucher und angemeldeten Benutzer
    var istAngemeldet=false;

    // Benutzername, sofern angemeldet
    var aktUser = '';

    // Benutzerdaten
    var users = [
      {name: "admin", email: "admin@a.de", password: "admin"},
      {name: "bob", email: '34@r.com', password: "123"}
    ];

    // Return-Block fuer Getter-Funktionen
    return{
      getService: function(){
        return service;
      },
      // Liefert den aktuell angemeldeten Benutzer
      getAktUser: function(){
        return aktUser;
      },
      getAllUser: function(){
        return users;
      },
      getUser: function(index){
        return users[index];
      },
      // Liefert den kompletten Datensatz zu einem Benutzer
      getUser: function(name){
        var found = $filter('filter')(users, {name: name}, true);
        return found;
      },
      getAktEmail: function(){
        var found = $filter('filter')(users, {name: aktUser}, true);
        return found[0].email;
      },
      // True, wenn Benutzer angemeldet ist
      isAngemeldet: function(){
        return istAngemeldet;
      },
      setAngemeldet: function(bool){
        istAngemeldet=bool;
      },
      setAktUser: function(username) {
        aktUser=username;
      },
      // Der Benutzer ist ein Admin (hat priviligierte Rechte)
      isAdmin: function(){
        if(aktUser === 'admin'){
          return true;
        }
        else
          return false;
      },
      // Loesche einen Benutzer auf den Datensaetzen. Wird ueber Filter realisiert. Rueckgabewert ueberschreibt die Collection
      deleteUser: function(username) {
        users = $filter('filter')(users, {name: '!' + username}, true);
        console.log('User '+username+' wurde gelöscht');

      },
      // Registriere neuen Benutzer in die Collection
      registerUser: function (username, email, pwd) {
        users.push({name: username, email: email, password: pwd});
        console.log('User '+username+' '+email+' '+pwd +' wurde angelegt');
      }
    }
  });
