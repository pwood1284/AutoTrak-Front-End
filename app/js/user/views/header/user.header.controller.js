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
       $scope.getSelRepairOrder = function (ro){
         UserHeaderService.getSelRO(ro).success (function (data) {
           $state.go('userDash.checkout');
           $scope.job = data.repair_order;
           console.log(ro);
         });
       };
     // Logout button.
       $scope.logout = function (){
         UserHeaderService.toLogout();
      };
    }
  ]);
}());
