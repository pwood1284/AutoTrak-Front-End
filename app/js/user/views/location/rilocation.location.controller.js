;(function (){
  'use strict';
  angular.module('AutoTrak')
      .controller('RiLocationCtrl', [ 'RiLocationLocationService', '$state','$http', '$scope', 'TokenService',
        function (RiLocationLocationService, $state, $http, $scope, TokenService) {
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
           // Get request for the selected RO number.
            $scope.getItem = function (ri_location){
              RiLocationLocationService.getInvItem(ri_location).success(function(data) {
                $scope.inventoryitem = data.inv_item;
                console.log(data.inv_item);
              });
            };

            $scope.addCheckout = function (inventoryitem){
              RiLocationLocationService.AddRepairItem(inventoryitem);

            };

            $scope.getHistory = function () {
              RiLocationLocationService.getHistoryItems();
            };

            $scope.logout = function (){
              RiLocationLocationService.toLogout();
            };
    }
  ]);
}());
