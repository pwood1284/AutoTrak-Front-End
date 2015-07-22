;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('HeaderCtrl', ['UserHeaderService', '$scope', 'TokenService', '$state', '$cookies',

    function (UserHeaderService, $scope, TokenService, $state, $cookies) {

      TokenService.tokenizeHeader();

       UserHeaderService.getTechRO().success( function (data){
        $scope.job = data.employee_repair_orders;
        // $scope.job = data.business_repair_orders;
        console.log(data);
        });

        $scope.getSingleRepair = function (ro){
          UserHeaderService.singleRepair(ro).success (function (data){
            $cookies.put('access_token5', data.repair_order.access_token5);
            $state.go('userDash.active');
            $scope.repair = data.repair_order;
            console.log(data);
          });
        };


    }

  ]);

}());
