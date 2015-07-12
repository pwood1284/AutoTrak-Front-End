;(function (){

  'use strict';

  angular.module('AutoTrak')

  .controller('AdminCtrl', ['$scope', '$location', 'AdminService', 'TokenService',

    function ($scope, $location, AdminService, TokenService) {

      TokenService.tokenizeHeader();

      $scope.employeeCreate = function (user) {
        AdminService.createEmployee(user);
      };

    }

  ]);



}());
