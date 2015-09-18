;(function (){
  'use strict';
  angular.module('AutoTrak')
  .controller('QuantityCtrl', ['SelectQtyQuantityService', '$scope', 'TokenService', '$state', '$cookies', '$stateParams',
    function (SelectQtyQuantityService, $scope, TokenService, $state, $cookies, $stateParams) {
      TokenService.tokenizeHeader();

      SelectQtyQuantityService.getRepairItemById($stateParams)
      .success( function (data){
        $scope.repairitem = data.repair_item.inventory_item;
        console.log(data);
      });

        var vm = this;
          vm.itemQuantity = '';
          vm.keys = [1,2,3,4,5,6,7,8,9];
          vm.onKeyPressed = onKeyPressed;

           function onKeyPressed(data) {
              if (data == '<') {
                vm.itemQuantity = '';
              } else {
                  vm.itemQuantity += data;
              }
           }

      $scope.addQuantity = function (itemQuantity) {
        SelectQtyQuantityService.updateRepairItemQty($stateParams, itemQuantity);
      };

      $scope.checkoutScreen = function(){
        SelectQtyQuantityService.toCheckoutScreen();
      };
      
      $scope.logout = function (){
        SelectQtyQuantityService.toLogout();
      };
  }]);
}());
