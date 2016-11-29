'use strict';

angular.module('recetasApp')
  .factory('Fire', function (firebase) {

    var firebaseConfig= {
      apiKey: 'AIzaSyCB7v3IvlpNKyrGzMcmYsQ0RQy1J0D-GgI',
      authDomain: 'recetasapp-e2ab3.firebaseapp.com',
      databaseURL: 'https://recetasapp-e2ab3.firebaseio.com',
      storageBucket: 'recetasapp-e2ab3.appspot.com',
      messagingSenderId: '748201528141'
    };

    var firebaseApp = firebase.initializeApp(firebaseConfig);
    var firebaseAuth = firebaseApp.auth();
    var firebaseDb = firebaseApp.database();
    var firebaseST = firebase.storage();

    return{
      firebaseAuth: function(){
        return firebaseAuth;
      },
      firebaseDb: function(){
        return firebaseDb;
      },
      firebaseST: function(){
        return firebaseST;
      }
    };

  });
