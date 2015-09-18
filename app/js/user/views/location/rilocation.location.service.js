;(function (){

  'use strict';

  angular.module('AutoTrak')
  .service('RiLocationLocationService', ['HEROKU', '$location', '$http', '$state', '$cookies',
    function (HEROKU, $location, $http, $state, $cookies) {

      var endpoint = HEROKU.URL;

        this.getInvItem = function (param) {
          return $http.get(endpoint + "/inventory_item_by_location/" + (param.ri_location), HEROKU.CONFIG);
        };

        this.AddRepairItem = function (item){
          $http.post(endpoint + "/repair_item", item, HEROKU.CONFIG)
          .success(function(data){
            $state.go("quantityKeypad", {itemid: data.repair_item.id});
          });
        };
        
        this.toCheckoutScreen = function() {
          $state.go("userDash.checkout");
        };

        this.getHistoryItems = function() {
          $state.go("userDash.history");
        };
        this.searchItems = function() {
          $state.go("userDash.active");
        };

        this.toLogout = function (){
          $cookies.remove('access_token5');
          $cookies.remove('access_token2');
          $state.go('keypad');
        };
    }]);
}());
