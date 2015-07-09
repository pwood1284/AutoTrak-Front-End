;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('SuperService', ['$http', 'HEROKU', '$location',

    function ($http, HEROKU, $location) {

      var register = HEROKU.URL + '/business_user/register';

      // var createSuperUser = function (userInfo) {
      //   var user = {


      //   };
      // };


      // Create a new Company account as Super User:

      // this.createAccount = function (user) {
      //   var object = createSuperUser(user);
      //   console.log(object);
      //   return $http.post(register, object);
      // };

      this.createAccount = function (user) {
       $http.post(register, user)
        .success( function (data) {
          console.log(data);
         }
        );
      };


      }

  ]);

}());
