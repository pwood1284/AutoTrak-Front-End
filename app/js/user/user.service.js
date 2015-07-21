;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {


      var technicianLog = HEROKU.URL + '/employee_user/pin_login';
      // var technicianRO = HEROKU.URL + '/repair_orders/business_user';
      var technicianRO = HEROKU.URL + '/repair_orders/employee_user';
      var userInventory = HEROKU.URL + '/inventory_items/business_user';
      var addInventoryItems = HEROKU.URL + '/repair_item';
      var getInventoryItems = HEROKU.URL + '/repair_items';


      this.loginTech = function (passkey) {

        $http.post(technicianLog, passkey, HEROKU.CONFIG)
        .success( function (data){

          $cookies.put('access_token2', data.employee_user_pin.access_token2);

          $state.go('userDash.list');
        });
      };

      this.addCheckout = function (item) {
        $http.post(addInventoryItems, item, HEROKU.CONFIG)
        .success( function (data){
          console.log('success');
          $state.go('UserDash.checkout');
        });
      };

      this.getTechRO = function () {
       return $http.get(technicianRO, HEROKU.CONFIG);
      };

      this.getUserInventory = function (){
        return $http.get(userInventory, HEROKU.CONFIG);
      };

      this.getRepairItems = function (){
        return $http.get(getInventoryItems, HEROKU.CONFIG);
      };
    }

  ]);

}());

