;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {


      var technicianLog = HEROKU.URL + '/employee_user/pin_login';


      this.loginTech = function (passkey) {
        console.log(passkey);
        $http.post(technicianLog, passkey, HEROKU.CONFIG)

        .success( function (data){

          $cookies.put('access_token2', data.employee_user_pin.access_token2);

          $state.go('userDash.active');
        });
      };
    }

  ]);

}());

