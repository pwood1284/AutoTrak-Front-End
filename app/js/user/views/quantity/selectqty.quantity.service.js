;(function (){
  'use strict';
  angular.module('AutoTrak')
  .service('SelectQtyQuantityService', ['HEROKU', '$http', '$state', '$cookies', '$stateParams',
    function (HEROKU, $http, $state, $cookies, $stateParams) {

      var getRepairItem = HEROKU.URL + "/repair_item/";
      var updateQuantity = HEROKU.URL + "/repair_item/update_quantity/";

    // Get last repair item from the logged in technician.
      this.getRepairItemById = function (param) {
        return $http.get(getRepairItem + (param.itemid), HEROKU.CONFIG);
      };

      this.updateRepairItemQty = function (param, quantity) {
        $http.patch(updateQuantity + (param.itemid), {repair_item_quantity: quantity}, HEROKU.CONFIG)
        .success (function (responseData){
          $state.go('userDash.checkout');
        });
      };

      this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };
    }
  ]);
}());
