;(function (){

  'use strict';

  angular.module('AutoTrak')
    .controller('UserCtrl', [ 'UserService', '$scope', 'TokenService',

      function (UserService, $scope, TokenService) {

        TokenService.tokenizeHeader();

        console.log('Hello from UserCtrl');

    // Keypad Set-Up
    // ==============                                                        *****************

      var vm = this;
      // var em = self;
        vm.employee_pin = '';
        vm.keys = [1,2,3,4,5,6,7,8,9];
        vm.onKeyPressed = onKeyPressed;

        function onKeyPressed(data) {
            if (data == '<') {
              vm.employee_pin = '';
                // vm.employee_pin = vm.employee_pin.slice(0, vm.employee_pin.length - 1);
            } else {
                vm.employee_pin += data;
            }
        }

      $scope.keypadEnt = function (employee_pin){
        UserService.loginTech(employee_pin);
      };
      // $scope.keypadEnt = function (employee_pin){
      //   UserService.loginTech(employee_pin);
      // };

      // UserService.getTechRO().success( function (data){
      //   console.log(data);
      // });

      // $scope.logout = function (){
      //   UserCheckoutService.toLogout();
      // };

      $scope.logout = function (){
        UserCheckoutService.toLogout();
      };

    }

  ]);

}());
