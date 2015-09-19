;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('LoginService', ['$http', '$state', 'HEROKU', '$location', '$cookies',
    function ($http, $state, HEROKU, $location, $cookies) {

      var mainLoginEndpoint = HEROKU.URL + '/business_user/login';
      var adminLoginEndpoint = HEROKU.URL + '/employee_user/login';

      this.mainLogin = function (user){

        $http.post(mainLoginEndpoint, user)

        .success ( function (data){

          console.log(data);

          $cookies.put('access_token', data.business_user.access_token);

          $location.path('/main');

        });

      };

      this.adminLogin = function (user) {

        $http.post(adminLoginEndpoint, user, HEROKU.CONFIG)

        .success ( function (data) {
          console.log(data);

          $cookies.put('access_token2', data.employee_user.access_token2);
          $location.path('/admin/dashboard');
        });

      };

      this.techLogin = function(){
        $state.go('keypad');
      };

      this.toHome = function(){
        $cookies.remove('access_token');
        $cookies.remove('access_token2');
        $cookies.remove('access_token5');
        $state.go('home');
      };
    }

  ]);

}());
