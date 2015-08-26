;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('CheckoutCtrl', ['$scope', 'UserCheckoutService', 'TokenService',
    function ($scope, UserCheckoutService, TokenService) {

      TokenService.tokenizeHeader();

      UserCheckoutService.getRepairItems().success( function (data){
        $scope.repairCheckout = data.repair_items;
      });

      $scope.itemCheckout = function (data){
        UserCheckoutService.checkoutRepair(data);
      };

      UserCheckoutService.checkoutHistory().success (function (data){
        $scope.history = data.repair_items_history;
        console.log(data);
      });
      $scope.riLocation = function (){
        UserCheckoutService.locationRi();
      };
      $scope.logout = function (){
        UserCheckoutService.toLogout();
      };

    }

  ]);

}());
