;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserCheckoutService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {

      var endpoint = HEROKU.URL;
      var getRepairItems = HEROKU.URL + '/repair_items';
      var checkoutItems = HEROKU.URL + '/repair_items/checkout';
      var deleteItem = HEROKU.URL + '/repair_item/';

      var checkoutHistory = HEROKU.URL + '/repair_items/history';

      this.getRepairItems = function (){
        return $http.get(getRepairItems, HEROKU.CONFIG);

      };

      this.riLocation = function (){
          $state.go('locationKeypad');
      };

      this.checkoutRepair = function (data){
        $http.patch(checkoutItems, data, HEROKU.CONFIG)
        .success( function (x){
          $cookies.remove('access_token5');
          $cookies.remove('access_token2');
          $state.go('keypad');
        });
      };

      this.repairItemDelete = function(param){
        $http.delete(deleteItem + param, HEROKU.CONFIG)
        .success(function(){
          $state.reload('userDash.checkout');
        });
      };

      this.updateRepairItemQty = function (data) {
        $http.get(endpoint + "/repair_item/" + (data.repairCheckout), HEROKU.CONFIG)
        .success(function(data){
          $state.go("quantityKeypad", {itemid: data.repair_item.id});
        });
      };

      this.checkoutHistory = function (){
        return $http.get(checkoutHistory, HEROKU.CONFIG);
      };

      this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };
    }
  ]);
}());
