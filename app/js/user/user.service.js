;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {


      var technicianLog = HEROKU.URL + '/employee_user/login';


      this.loginTech = function (passkey) {
        $http.post(technicianLog, passkey)
        .success( function (data){

          console.log('hello');

          $cookies.put('access_token2', data.employee_user.access_token2);

          $state.go('/technician/dashboard');
        });
      };
    }

  ]);

}());
