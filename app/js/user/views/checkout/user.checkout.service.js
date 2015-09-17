;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('UserCheckoutService', ['HEROKU', '$http', '$state', '$cookies', '$stateParams',
    function (HEROKU, $http, $state, $cookies, $stateParams) {

      var endpoint = HEROKU.URL;
      var getRepairItems = HEROKU.URL + '/repair_items';
      var getRepairItem = HEROKU.URL + '/repair_item/';
      var checkoutItems = HEROKU.URL + '/repair_items/checkout';
      var deleteItem = HEROKU.URL + '/repair_item/';


      this.getRepairItems = function (){
        return $http.get(getRepairItems, HEROKU.CONFIG);
      };

      this.riLocation = function (){
          $state.go('locationKeypad');
      };

      this.searchScreen = function (){
          $state.go('userDash.active');
      };

      this.getHistory = function(){
        return $http.get(HEROKU.URL + '/repair_items/history', HEROKU.CONFIG);
      };

      this.getRepairItemById = function (itemid) {
        return $http.get(getRepairItem + (itemid), HEROKU.CONFIG)
        .success(function(data){
          $state.go("UpdateQuantityKeypad", {itemid: data.repair_item.id});
          console.log(param.itemid);
          console.log(data);
        });
      };

      this.repairItemDelete = function(param){
        $http.delete(deleteItem + param, HEROKU.CONFIG)
        .success(function(){
          $state.reload('userDash.checkout');
        });
      };

      this.checkoutRepair = function (data){
        $http.patch(checkoutItems, data, HEROKU.CONFIG)
        .success( function (x){
          $cookies.remove('access_token5');
          $cookies.remove('access_token2');
          $state.go('keypad');
        });
      };

      this.toLogout = function (){
        $cookies.remove('access_token5');
        $state.go('userDash.list');
      };
    }
  ]);
}());
