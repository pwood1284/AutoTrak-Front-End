;(function (){
  'use strict';
  angular.module('AutoTrak')
  .controller('CheckoutCtrl', ['HEROKU', '$scope', '$http', 'UserCheckoutService', 'TokenService', '$state', '$stateParams',
    function (HEROKU, $scope, $http, UserCheckoutService, TokenService, $state, $stateParams) {

      TokenService.tokenizeHeader();

      UserCheckoutService.getRepairItems().success( function (data){
        $scope.repairCheckout = data.repair_items;
      });

      UserCheckoutService.getHistory().success( function (data){
        $scope.repairItemsHistory = data.repair_items_history;
      });

      $scope.riLocationScreen = function (){
        UserCheckoutService.riLocation();
      };

      $scope.itemCheckout = function (data){
        UserCheckoutService.checkoutRepair(data);
      };

      $scope.deleteRepairItem = function (data){
        UserCheckoutService.repairItemDelete(data);
      };

      $scope.getRepairItem = function (itemid) {
        UserCheckoutService.getRepairItemById(itemid);
        console.log(itemid);
      };

      $scope.searchScreen = function(){
        UserCheckoutService.searchScreen();
      };

      $scope.getHistory = function(){
          $state.go("userDash.history");
      };

      $scope.checkoutScreen = function(){
        UserCheckoutService.toCheckoutScreen();
      };
      
      $scope.logout = function (){
        UserCheckoutService.toLogout();
      };
    }
  ]);
}());
