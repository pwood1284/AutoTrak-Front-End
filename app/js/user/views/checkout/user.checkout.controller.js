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

      $state.itemCheckout = function (data){
        UserCheckoutService.checkoutRepair(data);
      };

    }

  ]);

}());





