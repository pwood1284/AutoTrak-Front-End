;(function (){

  'use strict';

  angular.module('AutoTrak')
    .controller('SuperUser', ['$scope', 'SuperService',
      function ($scope, SuperService) {

        console.log('Hi from SuperUser');

        $scope.superCreate = function (user) {
          console.log(user);
          SuperService.createAccount(user);
        };

        $scope.masterCreate = function (user) {
          SuperService.createMaster(user);
        };

    }

  ]);

}());
