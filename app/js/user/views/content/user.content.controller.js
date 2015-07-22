;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('ContentCtrl', ['$scope', 'UserContentService', 'TokenService',
    function ($scope, UserContentService, TokenService) {

      TokenService.tokenizeHeader();

      $scope.addCheckout = function (item){
        UserContentService.repairItemAdd(item);
      };

      UserContentService.getUserInventory().success( function (data){
        $scope.parts = data.inv_item;
        console.log(data);
      });

      UserContentService.getRepairItem().success( function (data){
        $scope.item = data.repair_items;
        console.log(data);
      });

      $scope.addQuantity = function (item) {
        UserContentService.updateRepairItem(item);

      };

    }

  ]);

}());
