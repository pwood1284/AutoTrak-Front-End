;(function (){

  'use strict';

  angular.module('AutoTrak')

  .service('AdminService', ['$http', '$state', 'HEROKU', '$stateParams',
    function ($http, $state, HEROKU, $stateParams) {


      var postEmployee = HEROKU.URL + '/employee_user/register';
      var getEmployee = HEROKU.URL + '/employee_user/business_index';
      var getEmployeeId = HEROKU.URL + '/employee_user/show/';

      this.createEmployee = function (user){

      var id = Number($stateParams.id);

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
        return $http.get(getEmployeeId + id, HEROKU.CONFIG);
      };

    }

  ]);

}());

// SearchService.goSearch().success( function (data) {
//       var singleID = Number($stateParams.id);
//       $scope.result = _.findWhere(data.questions, {profile_id: singleID});
//     });
