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
              // $state.go('inventorygetitem');

              RiLocationLocationService.getInvItem(ri_location).success(function(data) {
                $scope.inventoryitem = data.inv_item;
                console.log(data.inv_item);
              });
            };
            // $scope.getItem = function (ri_location){
            //   RiLocationLocationService.getInvItem(ri_location).success (function (data) {
            //     $state.go('inventory.getitem');
            //     $scope.vm = data.inv_item.inventory_item_location;
            //     console.log(ri_location);
            //   });
            // };


        // $scope.keypadEnt = function (ri_location){
        //   RiLocationLocationService.enterLocation(ri_location);
        // };
        // $scope.entLocation = function (item){
        //   RiLocationLocationService.enterLocation(item);
        //   console.log(item);
        // };
        // RiLocationLocationService.getInvItem().success( function (data){
        //   $scope.parts = data.inv_item;
        //   // console.log(data);
        // });
        // $scope.getInvItem = function (id) {
        //   AdminService.getInventoryItem(id).success( function (data){
        //     var locationId = $stateParams.id;
        //     $scope.edit = data;
        //   });
        // };

      //   this.toLogout = function (){
      //   $cookies.remove('access_token5');
      //   $cookies.remove('access_token2');
      //   $state.go('keypad');
      // };
      // $scope.riLocation = function (){
      //   UserCheckoutService.locationRi()
      // };

      $scope.logout = function (){
        RiLocationLocationService.toLogout();
      };

    }

  ]);

}());
