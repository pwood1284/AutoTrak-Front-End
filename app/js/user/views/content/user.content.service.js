;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserContentService', ['HEROKU', '$http', '$state', '$cookies',
    function (HEROKU, $http, $state, $cookies) {

      var userInventory = HEROKU.URL + '/inventory_items/business_user';
      var addRepairItems = HEROKU.URL + '/repair_item';
      var getRepairItems = HEROKU.URL + '/repair_items';
      var updateQuantity = HEROKU.URL + '/repair_item/quantity';
      var endpoint = HEROKU.URL;

      this.getUserInventory = function (){
        return $http.get(userInventory, HEROKU.CONFIG);
      };

      this.getRepairItem = function (){
        return $http.get(getRepairItems, HEROKU.CONFIG);
      };

      this.getRepairItems = function (){
        return $http.get(getRepairItems, HEROKU.CONFIG);
      };

      this.checkoutItem = function (item) {
        $http.post(addRepairItems, item, HEROKU.CONFIG)
        .success( function (data){
          $state.go('userDash.checkout');
        });
      };

      this.repairItemAdd = function (item){
        $http.post(addRepairItems, item, HEROKU.CONFIG)
        .success( function (data){
          $state.go('userDash.add');
        });
      };

      this.updateRepairItem = function (item) {
        $http.patch(updateQuantity, item, HEROKU.CONFIG)
        .success( function (){
          $state.go('userDash.checkout');
        });
      };

      this.AddRepairItem = function (item){
        $http.post(endpoint + "/repair_item", item, HEROKU.CONFIG)
        .success(function(data){
          $state.go("quantityKeypad", {itemid: data.repair_item.id});
        });
      };

      this.getItemsHistory = function(){
        $state.go("userDash.history");
      };

      this.toRiLocation = function() {
        $state.go('locationKeypad');
      };
      
      this.toCheckoutScreen = function(){
        $state.go('userDash.checkout');
      };

      this.toLogout = function (){
        $cookies.remove('access_token5');
        $cookies.remove('access_token2');
        $state.go('keypad');
      };
    }

  ]);

}());
