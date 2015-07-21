;(function (){

  'use strict';

  angular.module('AutoTrak')
  .controller('ContentCtrl', ['$scope', 'UserService', 'TokenService',
    function ($scope, UserService, TokenService) {

      TokenService.tokenizeHeader();

      UserService.getUserInventory().success( function (data){
        $scope.parts = data.inv_item;
        console.log(data);
      });
    }

  ]);

}());
