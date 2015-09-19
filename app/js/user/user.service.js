;(function (){
  'use strict';
  angular.module('AutoTrak')
  .service('UserService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {
    //Rails Server routes.
      var technicianLog = HEROKU.URL + '/employee_user/pin_login';
      var technicianRO = HEROKU.URL + '/repair_orders/employee_user';
      var userInventory = HEROKU.URL + '/inventory_items/business_user';
      var addInventoryItems = HEROKU.URL + '/repair_item';
    //Post request to authenticate pin number.
      this.loginTech = function (passkey) {
        $http.post(technicianLog, passkey, HEROKU.CONFIG)
        .success( function (data){
          $cookies.put('access_token2', data.employee_user_pin.access_token2);
          $state.go('userDash.list');
        });
      };
    //Get all Repair Orders for the currently logged in user.
      this.getTechRO = function () {
       return $http.get(technicianRO, HEROKU.CONFIG);
      };
    //Get all inventory items in the system.
      this.getUserInventory = function (){
        return $http.get(userInventory, HEROKU.CONFIG);
      };
    // AdminLogin button.
      this.toAdminLogin = function (){
        $state.go('adminLogin');
      };  
    }
  ]);
}());
