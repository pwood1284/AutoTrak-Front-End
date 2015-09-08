;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('QuantityCtrl', ['SelectQtyQuantityService', '$scope', 'TokenService', '$state', '$cookies',

    function (SelectQtyQuantityService, $scope, TokenService, $state, $cookies) {

      TokenService.tokenizeHeader();

       SelectQtyQuantityService.getTechRO().success( function (data){
        $scope.job = data.employee_repair_orders;
        });

        $scope.addCheckout = function (item){
          RiLocationLocationService.repairItemAdd(item);
          // .success(function(vm){
          //   RilocationLocationService.updateRepairItemQty(vm);
                  console.log(item);
          // });
        };

        $scope.addQuantity = function (ri_location) {
          RiLocationLocationService.updateRepairItem(ri_location);
            console.log(item);
        };

        $scope.getSingleRepair = function (ro){
          $cookies.put('access_token5', ro.repair_order.access_token5);
          SelectQtyQuantityService.singleRepair(ro).success (function (data){
            $state.go('userDash.checkout');
            $scope.repair = data.repair_order;
            console.log(data);
          });
        };

        this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };

       $scope.logout = function (){
        UserHeaderService.toLogout();
      };

    }

  ]);

}());
