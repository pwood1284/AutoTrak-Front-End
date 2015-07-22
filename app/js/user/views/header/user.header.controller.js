;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('HeaderCtrl', ['UserHeaderService', '$scope', 'TokenService', '$state', '$cookies',

    function (UserHeaderService, $scope, TokenService, $state, $cookies) {

      TokenService.tokenizeHeader();

       UserHeaderService.getTechRO().success( function (data){
        $scope.job = data.employee_repair_orders;
        });

        $scope.getSingleRepair = function (ro){
          $cookies.put('access_token5', ro.repair_order.access_token5);
          UserHeaderService.singleRepair(ro).success (function (data){
            $state.go('userDash.active');
            $scope.repair = data.repair_order;
            console.log(data);
          });
        };


    }

  ]);

}());
