;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('ContentCtrl', ['$scope', 'UserContentService', 'TokenService',
    function ($scope, UserContentService, TokenService) {

      TokenService.tokenizeHeader();

      $scope.addCheckout = function (item){
        UserContentService.addCheckout(item);
      };

      UserContentService.getUserInventory().success( function (data){
        $scope.parts = data.inv_item;
        console.log(data);
      });

      $scope.addCheckout = function (data){
        UserService.checkoutItem(data);
        console.log(data);
      };

    }

  ]);

}());
