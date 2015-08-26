;(function (){

  'use strict';

  angular.module('AutoTrak')
      .controller('RiLocationCtrl', [ 'RiLocationLocationService', '$scope', 'TokenService',

        function (RiLocationLocationService, $scope, TokenService) {

          TokenService.tokenizeHeader();

          console.log('Hello from RiLocationCtrl');


        var vm = this;
        // var em = self;
          vm.ri_location = '';
          vm.keys = [1,2,3,4,5,6,7,8,9];
          vm.onKeyPressed = onKeyPressed;

          function onKeyPressed(data) {
              if (data == '<') {
                vm.ri_location = '';
                  // vm.employee_pin = vm.employee_pin.slice(0, vm.employee_pin.length - 1);
              } else {
                  vm.ri_location += data;
              }
          }

        $scope.keypadEnt = function (ri_location){
          RiLocationLocationService.enterLocation(ri_location);
        };
        $scope.enterLocation = function (ri_location){
          RiLocationLocationService.enterLocation(ri_location);
        };
      //   this.toLogout = function (){
      //   $cookies.remove('access_token5');
      //   $cookies.remove('access_token2');
      //   $state.go('keypad');
      // };

      $scope.logout = function (){
        RiLocationLocationService.toLogout();
      };

    }

  ]);

}());
