;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('HeaderCtrl', ['UserService', '$scope', 'TokenService',

    function (UserService, $scope, TokenService) {

      TokenService.tokenizeHeader();

       UserService.getTechRO().success( function (data){
        $scope.job = data.employee_repair_orders;
        console.log(data);
      });

    }

  ]);

}());
