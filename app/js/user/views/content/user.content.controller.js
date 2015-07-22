;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('ContentCtrl', ['$scope', 'UserContentService', 'TokenService',
    function ($scope, UserContentService, TokenService) {

      TokenService.tokenizeHeader();

      $scope.addCheckout = function (q){
        UserContentService.repairItemUpdate(q);
      };

      UserContentService.getUserInventory().success( function (data){
        $scope.parts = data.inv_item;
        console.log(data);
      });

    }

  ]);

}());
