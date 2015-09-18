;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('ContentCtrl', ['$scope', 'UserContentService', 'TokenService',
    function ($scope, UserContentService, TokenService) {

      TokenService.tokenizeHeader();

      $scope.addCheckout = function (parts){
        UserContentService.AddRepairItem(parts);
      };

      UserContentService.getUserInventory().success( function (data){
        $scope.parts = data.inv_item;
        // console.log(data);
      });

      UserContentService.getRepairItem().success( function (data){
        $scope.items = data.repair_items;
        console.log(data);
      });

      $scope.addQuantity = function (item) {
        console.log(item);
        UserContentService.updateRepairItem(item);
      };

      $scope.getHistory = function () {
        UserContentService.getItemsHistory();
      };
      
      $scope.checkoutScreen = function(){
        UserContentService.toCheckoutScreen();
      };

       $scope.logout = function (){
        UserContentService.toLogout();
      };
      $scope.riLocationScreen = function() {
        UserContentService.toRiLocation();
      };

    }

  ]);

}());
