;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('LoginService', ['$http', 'HEROKU', '$location', '$cookies',
    function ($http, HEROKU, $location, $cookies) {

      var adminloginEndpoint = HEROKU.URL + '/business_user/login'

      this.adminLogin = function (user){
        $http.post(adminloginEndpoint, user)

        .success ( function (data){
          console.log(data);

          $cookies.put('access_token', data.business_user.access_token);

          $location.path('/admin/dashboard');

        })
      }

    }

  ]);

}());
