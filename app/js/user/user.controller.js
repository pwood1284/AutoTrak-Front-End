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

        vm.employee_pin = '';
        vm.keys = [1,2,3,4,5,6,7,8,9];
        vm.onKeyPressed = onKeyPressed;

      function onKeyPressed(data) {
        if (data == '<') {
          vm.employee_pin = '';
            // Removes one keypad entry at a time.
            // vm.employee_pin = vm.employee_pin.slice(0, vm.employee_pin.length - 1);
        } else {
            vm.employee_pin += data;
        }
      }
    // Enter button on Employee Pin Login.
      $scope.keypadEnt = function (employee_pin) {
        UserService.loginTech(employee_pin);
      };
    // Logout button
      $scope.logout = function (){
        UserCheckoutService.toLogout();
      };
    }
  ]);
}());
