;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('AdminService', ['$http', '$state', 'HEROKU',
    function ($http, $state, HEROKU) {

      var postEmployee = HEROKU.URL + '/employee_user/register';
      var getEmployee = HEROKU.URL + '/employee_user/business_index';
      var getEmployeeId = HEROKU.URL + '/employee_user/show/:id';

      this.createEmployee = function (user){

        $http.post(postEmployee, user, HEROKU.CONFIG)

        .success ( function (data){
          console.log(data);
          $state.reload('admin.employee');
        });

      };

      this.employeeList = function () {
        return $http.get(getEmployee, HEROKU.CONFIG);
      };

      this.editEmployee = function () {
        $http.get(getEmployeeId, HEROKU.CONFIG)

        .success ( function (data) {
           console.log(data);
        });

      };

    }

  ]);

}());
