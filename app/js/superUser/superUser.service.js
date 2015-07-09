;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('SuperService', ['$http', 'HEROKU', '$location',

    function ($http, HEROKU, $location) {

      var register = HEROKU.URL + '/business_user/register';

      var createSuperUser = function (SuperUserInfo) {
        var user = {
          business_user_email : user.email,
          business_user_password : user.password,
          business_user_name : user.business,
          business_user_street : user.street,
          business_user_city : user.city,
          business_user_state : user.state,
          business_user_zipcode: user.zipcode,
          business_logo_url : 'http://www.gmkfreelogos.com/logos/L/img/Lorem_Ipsum.gif',
          business_user_cap : 10
        };
      };


      // Create a new Company account as Super User:

      this.superCreate = function (user) {
        var object = createSuperUser(user);
        console.log(object);
        return $http.post(register, object);
      };

      // this.superCreate = function (user) {
      //  $http.post(register, user)
      //   .success( function (data) {
      //     _successLog(data);
      //    }
      //   );
      // };


      }

  ]);

}());
