;(function (){
  'use strict';
  angular.module('AutoTrak')
  .controller('HeaderCtrl', ['UserHeaderService', '$scope', 'TokenService', '$state', '$cookies',
    function (UserHeaderService, $scope, TokenService, $state, $cookies) {
      TokenService.tokenizeHeader();
      console.log('Hello from UserCtrl');

     // Gets all Repair Orders associated with the currently logged in user.
        UserHeaderService.getTechRO().success(function (data){
        $scope.job = data.employee_repair_orders;
        console.log(data);
        });
     // Get request for the selected RO number.
      //  $scope.getSelRepairOrder = function (ro){
      //     $cookies.put('access_token5', ro.repair_order.access_token5);
      //     UserHeaderService.singleRepair(ro).success (function (data){
      //       $state.go('userDash.active');
      //       $scope.repair = data.repair_order;
       //
      //     });
      //   };





       // Get request for the selected RO number.
         $scope.getRO = function (ro){
           $cookies.put('access_token5', ro.repair_order.access_token5);
           UserHeaderService.getSelRO(ro).success(function(data) {
             $state.go('userDash.checkout');
             $scope.job = data.repair_order;

           });
         };


     // Logout button.
       $scope.logout = function (){
         UserHeaderService.toLogout();
      };
    }
  ]);
}());
