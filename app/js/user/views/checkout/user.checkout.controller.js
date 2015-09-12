;(function (){
  'use strict';
  angular.module('AutoTrak')
  .controller('CheckoutCtrl', ['$scope', 'UserCheckoutService', 'TokenService',
    function ($scope, UserCheckoutService, TokenService) {

      TokenService.tokenizeHeader();

      UserCheckoutService.getRepairItems().success( function (data){
        $scope.repairCheckout = data.repair_items;
        console.log(data);
      });

      $scope.riLocationScreen = function (){
        UserCheckoutService.riLocation();
      };

      $scope.itemCheckout = function (data){
        UserCheckoutService.checkoutRepair(data);
        console.log(data);
      };

      $scope.deleteRepairItem = function (data){
        UserCheckoutService.repairItemDelete(data);
      };

      $scope.updateRepairItem = function (data) {
        UserCheckoutService.updateRepairItemQty(data);
      };
      // UserCheckoutService.checkoutHistory().success (function (data){
      //   $scope.history = data.repair_items_history;
      //   console.log(data);
      // });

      $scope.logout = function (){
        UserCheckoutService.toLogout();
      };
    }
  ]);
}());
