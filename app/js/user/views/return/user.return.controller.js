;(function (){
  'use strict';
  angular.module('AutoTrak')
  .controller('ReturnCtrl', ['HEROKU', '$scope', '$http', 'UserReturnService', 'TokenService', '$state', '$stateParams',
    function (HEROKU, $scope, $http, UserReturnService, TokenService, $state, $stateParams) {

      TokenService.tokenizeHeader();

      UserReturnService.getRepairItemById($stateParams)
      .success( function (data){
        $scope.updateRepairItem = data.repair_item.inventory_item;
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
      // $scope.getRepairItem = function (itemid) {
      //   UserReturnService.getRepairItemById($stateParams, itemid);
      //   console.log($stateParams);
      //   console.log(itemid);
      // };

      // $scope.updateQuantity = function (itemQuantity){
      //   UserReturnService.updateRepairItemQty($stateParams, itemQuantity);
      //
      // };

      $scope.logout = function (){
        UserReturnService.toLogout();
      };
    }
  ]);
}());
