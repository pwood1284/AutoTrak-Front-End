;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('CheckoutCtrl', ['$scope', 'UserService', 'TokenService',
    function ($scope, UserService, TokenService) {

      TokenService.tokenizeHeader();


      UserService.getRepairItems().success( function (data){
        $scope.repairCheckout = data.repair_items;
      });

    }

  ]);

}());





