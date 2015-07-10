;(function (){

  'use strict';

  angular.module('AutoTrak')

  .controller('HomeCtrl', [ '$scope', 'TokenService', 'LoginService',

    function ($scope, TokenService, LoginService){

       TokenService.tokenizeHeader();

       $scope.loginAdmin = function (user){
        LoginService.adminLogin(user);
       };

    }

  ]);

}());
