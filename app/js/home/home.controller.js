;(function (){

  'use strict';

  angular.module('AutoTrak')

  .controller('HomeCtrl', [ '$scope', 'TokenService', 'LoginService',

    function ($scope, TokenService, LoginService){

       TokenService.tokenizeHeader();

       $scope.loginMain = function (user) {
        LoginService.mainLogin(user);
       };

       $scope.loginAdmin = function (user) {
        LoginService.adminLogin(user);
       };
       $scope.toKeypad = function(){
         LoginService.techLogin();
       };
    }

  ]);

}());
