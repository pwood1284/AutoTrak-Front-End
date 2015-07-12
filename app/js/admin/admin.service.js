;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('AdminService', ['$http', '$state', 'HEROKU',
    function ($http, $state, HEROKU) {

      var postEmployee = HEROKU.URL + '/employee_user/register';

      this.createEmployee = function (user){

        $http.post(postEmployee, user, HEROKU.CONFIG)

        .success ( function (data){

          console.log(data);

          $state.go('admin.employee');

        });

      };

    }

  ]);

}());
