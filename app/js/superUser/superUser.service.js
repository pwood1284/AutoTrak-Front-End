;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('SuperService', ['$http', 'HEROKU', '$location',

    function ($http, HEROKU, $location) {

      var register = HEROKU.URL + '/business_user/register';

      // Create a new Company account as Super User:

      this.superCreate = function (user) {
        $http.post(register, user)
        .success( function (user) {

          console.log(user);

          // redirect after success:
          $location.path('/');

          // clears form:
          $scope.user = {};

        });

      };

    }

  ]);

}());
