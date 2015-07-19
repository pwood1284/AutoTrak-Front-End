;(function (){

  'use strict';

  angular.module('AutoTrak')
    .controller('UserCtrl', [ 'UserService', '$scope',

      function (UserService, $scope) {

        console.log('Hello from UserCtrl');

    // Keypad Set-Up
    // ==============                                                        *****************

      var vm = this;

        vm.valor = '';
        vm.keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        vm.onKeyPressed = onKeyPressed;

        function onKeyPressed(data) {
            if (data == '<') {
                vm.valor = vm.valor.slice(0, vm.valor.length - 1);
            } else {
                vm.valor += data;
            }
        }

      $scope.keypadEnt = function (valor){
        UserService.loginTech(valor);
      };

    }

  ]);

}());
