;(function (){

  'use strict';

  angular.module('AutoTrak')
    .controller('SuperUser', ['$scope', 'SuperService', 'TokenService',
      function ($scope, SuperService, TokenService) {

      TokenService.tokenizeHeader();

        $scope.superCreate = function (user) {
          // console.log(user);
          SuperService.createAccount(user);
        };

        $scope.masterCreate = function (user) {
          // console.log(user);
          SuperService.createMaster(user);
        };

    }

  ]);

}());
